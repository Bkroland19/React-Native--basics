import React from "react";
import { StyleSheet, SafeAreaView ,View} from "react-native";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
	return <SafeAreaView style={[styles.screen, style]}><View style = {styles}>{children}</View></SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
	screen: {
		padding: Constants.statusBarHeight,
		flex: 1,
	},
});
