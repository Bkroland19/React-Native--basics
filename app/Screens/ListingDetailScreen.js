import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppText from "../components/AppText/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
const ListingDetailScreen = (prop) => {
	console.log(prop);
	return (
		<View>
			<Image style={styles.image} source={require("../assets/jacket.jpeg")} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Jacket for sell</AppText>
				<AppText style={styles.price}>200UGX</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/jacket.jpeg")}
						title="bk roland"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	userContainer: {
		marginVertical: 40,
	},
	detailsContainer: {
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: "500",
	},
	price: {
		fontSize: 20,
		color: colors.secondary,
		marginVertical: 10,
	},
});

export default ListingDetailScreen;
