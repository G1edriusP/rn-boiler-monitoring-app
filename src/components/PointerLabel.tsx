import React, { FC, memo } from "react";
import { Text, View } from "react-native";

// Styling
import styles from "../styles/components/PointerLabel";

type Props = {
  items: any;
};

const PointerLabel: FC<Props> = memo(({ items }) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.dateText}>{items[0].label}</Text>
      <View style={styles.tempWrap}>
        <Text style={styles.tempText}>{`${items[0].value} °C`}</Text>
      </View>
    </View>
  );
});

export default PointerLabel;
