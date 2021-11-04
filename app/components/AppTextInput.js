import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colors.mediumGray}
					style={styles.icon}
				/>
			)}
			<TextInput style={defaultStyles.text} {...otherProps} />
		</View>
	);
};

export default AppTextInput;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: defaultStyles.colors.lightGray,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		marginBottom: 15,
	},

	icon: {
		marginRight: 10,
	},
});
