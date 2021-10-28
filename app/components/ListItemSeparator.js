import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ListItemSeparator = () => {
	return (
		<View style={{ width: "100%", height: 1, backgroundColor: colors.black }} />
	);
};

export default ListItemSeparator;

const styles = StyleSheet.create({
	separator: {
		width: "100%",
		backgroundColor: colors.lightGray,
	},
});
