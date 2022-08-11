import React, { FC, memo } from "react";

// Components
import { Text, TouchableOpacity } from "react-native";

// Styling
import styles from "../styles/components/FilterButton";

type Props = {
  onPress: (val: number) => void;
  label: string;
  value: number;
};

const FilterButton: FC<Props> = memo(({ onPress, label, value }) => {
  return (
    <TouchableOpacity style={styles.wrap} onPress={() => value && onPress(value)}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
});

export default FilterButton;
