import { StyleSheet } from "react-native";

import { Colors } from "../../constants/theme";

export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "#242526",
    paddingTop: 32,
  },
  tempWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  tempText: {
    color: "#FFFFFF",
    fontSize: 36,
    padding: 32,
    marginBottom: 32,
  },
  filterBtnsWrap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 16,
  },
});
