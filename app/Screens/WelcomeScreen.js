import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen() {
	return (
		<ImageBackground
			blurRadius={10}
			style={styles.background}
			source={require("../assets/econ.png")}
		>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require("../assets/icon.png")} />
				<Text style={styles.tagline}>Sell What you dont need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton title="Login" />
				<AppButton title="Register" color="secondary" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	buttonsContainer: {
		marginBottom: 15,
		padding: 20,
		width: "100%",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 70,
		alignItems: "center",
	},
	text: {
		fontWeight: "bold",
		paddingTop: 10,
		textTransform: "capitalize",
		fontSize: 16,
	},
	tagline: {
		fontSize: 25,
		fontWeight: 600,

		paddingVertical: 20,
	},
});
export default WelcomeScreen;
