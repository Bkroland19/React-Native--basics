import { Platform } from "react-native";
import colors from "../config/colors";

export default {
	colors,
	text: {
		color: colors.grey,
		fontSize: 18,
		fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
};
