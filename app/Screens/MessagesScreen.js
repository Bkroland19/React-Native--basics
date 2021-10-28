import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const messages = [
	{
		id: 1,
		title: "T1",
		description: "D1",
		image: require("../assets/jacket.jpeg"),
	},
	{
		id: 2,
		title: "T2",
		description: "D2",
		image: require("../assets/jacket.jpeg"),
	},
];

const MessagesScreen = () => {
	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
