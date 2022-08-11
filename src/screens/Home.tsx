import React, { useEffect, useState } from "react";
import { useCallbackOne } from "use-memo-one";

// Styling
import styles from "../styles/screens/Home";

// Components
import { View, Text, StatusBar } from "react-native";
import { Chart, FilterButton } from "../components";

// Api
import { AxiosError } from "axios";
import ApiClient from "../utils/api/ApiClient";

// Utils
import { getHistByTime, parseHist } from "../utils/hist";

// Constants
import { Temp } from "constants/types/Temp";
import { SCREEN_WIDTH } from "../constants/dimensions";
import intervals from "../constants/intervals";

const Home = () => {
  const client = ApiClient.getInstance();

  const [temp, setTemp] = useState<Temp>();
  const [hist, setHist] = useState();
  const [offset, setOffset] = useState<number>(0); // Offset value for pointer label component

  const onChartFilterPress = useCallbackOne(
    (value: number) => {
      setHist(getHistByTime(hist, value));
    },
    [hist],
  );

  const onPointerScroll = useCallbackOne(data => {
    if (data.pointerX < SCREEN_WIDTH / 2) setOffset(50);
    else setOffset(-50);
  }, []);

  useEffect(() => {
    client.getTemp().then(res => setTemp(res));
    client.getHist().then(res => setHist(parseHist(res)));
  }, []);

  useEffect(() => {
    const tempInterval = setInterval(() => {
      client.getTemp().then(res => setTemp(res));
    }, intervals.TEMP);
    const histInterval = setInterval(() => {
      client.getHist().then(res => setHist(parseHist(res)));
    }, intervals.HIST);

    return () => {
      clearInterval(tempInterval);
      clearInterval(histInterval);
    };
  });

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor='transparent' translucent />
      <View style={styles.wrap}>
        {temp ? (
          <View style={styles.tempWrap}>
            <Text style={styles.tempText}>{temp.tempC}</Text>
          </View>
        ) : null}
        {hist ? (
          <View>
            <Chart data={hist} offset={offset} onScroll={onPointerScroll} />
          </View>
        ) : null}
        {hist ? (
          <View style={styles.filterBtnsWrap}>
            <FilterButton onPress={onChartFilterPress} label={"12H"} value={12} />
            <FilterButton onPress={onChartFilterPress} label={"1D"} value={24} />
            <FilterButton onPress={onChartFilterPress} label={"3D"} value={72} />
            <FilterButton onPress={onChartFilterPress} label={"ALL"} value={-1} />
          </View>
        ) : null}
      </View>
    </>
  );
};

export default Home;
