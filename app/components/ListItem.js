import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
	title,
	subTitle,
	image,
	onPress,
	renderRightActions,
	IconComponent,
}) => {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight onPress={onPress} underlayColor="light">
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.detailsContainer}>
						<AppText style={styles.title}>{title}</AppText>
						{subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
					</View>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: {
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	title: {
		fontWeight: "600",
	},
	subTitle: {
		color: colors.mediumGray,
	},
});
export default ListItem;
