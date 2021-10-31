import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		fontFamaliy: Platform.OS === "android" ? "Roboto" : "Avenir",
	},
});

export default styles;
