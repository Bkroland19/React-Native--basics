import React, { useState, useEffect } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen from "./app/components/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
		</Tab.Navigator>
	);
}
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const Link = () => {
	const navigation = useNavigation();
	return (
		<Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
	);
};

const Tweets = ({ navigation }) => {
	<Screen>
		<Text>Tweets</Text>
		<Link />
	</Screen>;
};

const TweetDetails = () => {
	<Screen>
		<Text>Tweets</Text>
	</Screen>;
};

const Stack = createStackNavigator();

const StackNavigator = () => (
	<Stack.Navigator initialRouteName="Tweets">
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen
			name="TweetDetails"
			component={TweetDetails}
			options={({ route }) => ({ title: "Tweet Details" })}
		/>
	</Stack.Navigator>
);

export default function App() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
