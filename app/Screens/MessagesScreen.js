import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteActions from "../components/ListItemDeleteActions";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const initialMessages = [
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
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = (message) => {
		setMessages(messages.filter((m) => m.id !== message.id));
	};
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
						onPress={() => console.log("message selected", item)}
						renderRightActions={() => (
							<ListItemDeleteActions onPress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: "T2",
							description: "D2",
							image: require("../assets/jacket.jpeg"),
						},
					]);
				}}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
