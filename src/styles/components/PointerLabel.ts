import { StyleSheet } from "react-native";

import { Colors } from "../../constants/theme";

export default StyleSheet.create({
  wrap: {
    height: 90,
    width: 100,
    justifyContent: "center",
    marginTop: -30,
    marginLeft: -40,
  },
  dateText: {
    color: Colors.WHITE,
    fontSize: 14,
    marginBottom: 6,
    textAlign: "center",
  },
  tempWrap: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.GREEN,
  },
  tempText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
