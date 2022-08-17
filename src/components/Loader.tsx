import React, { FC, memo } from "react";

// Components
import { ActivityIndicator } from "react-native";

type Props = {
  size: "large" | "small";
  color: string;
};

const Loader: FC<Props> = memo(({ size, color }) => {
  return <ActivityIndicator size={size} color={color} />;
});

export default Loader;
