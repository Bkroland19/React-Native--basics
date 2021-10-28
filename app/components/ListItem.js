import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText/AppText";

const ListItem = ({ title, subTitle, image }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={image} />
			<View>
				<AppText style={styles.title}>{title}</AppText>
				<AppText style={styles.subTitle}>{subTitle}</AppText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 15,
	},
	title: {
		fontWeight: "600",
	},
	subTitle: {
		color: colors.mediumGray,
	},
});
export default ListItem;
