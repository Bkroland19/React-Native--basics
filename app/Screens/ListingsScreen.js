import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Screen from '../components/Screen';
import  colors from "../config/colors";
const listings = [
	{
		id: 1,
		title: "red jacket for sale",
		price: "200UGX",
		image: require("../assets/jacket.jpeg"),
	},
	{
		id: 2,
		title: "red jacket for sale",
		price: "200UGX",
		image: require("../assets/user1.jpg"),
	},
	{
		id: 3,
		title: "red jacket ",
		price: "200UGX",
		image: require("../assets/user3.jpg"),
	},
	{
		id: 4,
		title: " jacket for sale",
		price: "200UGX",
		image: require("../assets/jacket.jpeg"),
	},
];
const ListingsScreen = () => {
	return (
		<Screen style = {styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={(listing) => listing.id.toString()}
				renderItem={({ item }) => (
					<Card title={item.title} subTitle={item.price} image={item.image} />
				)}
			/>
		</Screen>
	);
};

export default ListingsScreen;

const styles = StyleSheet.create({ 
	screen:{
		padding:20,
		backgroundColor:colors.lightGray,
	}
 });
