import { StyleSheet } from "react-native";

import { Colors, Fonts } from "../../constants/theme";

export default StyleSheet.create({
  wrap: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: 80,
    height: 32,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    // fontFamily: Fonts.SEMIBOLD,
    fontWeight: "bold",
    fontSize: 14,
    color: Colors.WHITE,
  },
});
