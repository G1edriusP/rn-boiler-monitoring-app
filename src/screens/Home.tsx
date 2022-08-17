import React, { useEffect } from "react";
import { useCallbackOne } from "use-memo-one";

// Styling
import styles from "../styles/screens/Home";

// Components
import { View, Text, StatusBar } from "react-native";
import { Chart, FilterButton, Loader } from "../components";
import { inject, observer } from "mobx-react";

// Api
import { AxiosError } from "axios";
import ApiClient from "../utils/api/ApiClient";

// Utils
import { getHistByTime, parseHist } from "../utils/hist";

// Constants
import intervals from "../constants/intervals";
import { Colors } from "../constants/theme";

const Home = (props: any) => {
  const client = ApiClient.getInstance();

  const { temp, hist, filteredHist, setTemp, setHist, setFilteredHist } = props.store;

  const onChartFilterPress = useCallbackOne(
    (value: number) => {
      if (value === -1) setFilteredHist(null);
      else setFilteredHist(getHistByTime(hist, value));
    },
    [hist],
  );

  useEffect(() => {
    client.getTemp().then(res => setTemp(res));
    client.getHist().then(res => setHist(parseHist(res)));
  }, []);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      client.getTemp().then(res => setTemp(res));
    }, intervals.TEMP);
    return () => clearInterval(tempInterval);
  });

  useEffect(() => {
    const histInterval = setInterval(() => {
      client.getHist().then(res => setHist(parseHist(res)));
    }, intervals.HIST);
    return () => clearInterval(histInterval);
  });

  return temp && hist ? (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor='transparent' translucent />
      <View style={styles.wrap}>
        <View style={styles.tempWrap}>
          <Text style={styles.tempText}>{temp.tempC}</Text>
        </View>
        <View>
          <Chart data={filteredHist || hist} />
        </View>
        <View style={styles.filterBtnsWrap}>
          <FilterButton onPress={onChartFilterPress} label={"12H"} value={12} />
          <FilterButton onPress={onChartFilterPress} label={"1D"} value={24} />
          <FilterButton onPress={onChartFilterPress} label={"3D"} value={72} />
          <FilterButton onPress={onChartFilterPress} label={"ALL"} value={-1} />
        </View>
      </View>
    </>
  ) : (
    <View style={[styles.wrap, { justifyContent: "center" }]}>
      <Loader size={"small"} color={Colors.GREEN} />
    </View>
  );
};

export default inject("store")(observer(Home));
