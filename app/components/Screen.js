import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children }) => {
	return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
	screen: {
		padding: Constants.statusBarHeight,
	},
});
