import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

const CategoryPickerItem = ({ onPress, item }) => {
	return (
		<View style={styles.container}>
			<Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
			<AppText>{item.label}</AppText>
		</View>
	);
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
	container: {},
});
