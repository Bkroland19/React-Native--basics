import React, { useState } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppText from "./app/components/AppText";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/Screens/AccountScreen";
import ListingsScreen from "./app/Screens/ListingsScreen";
import MessagesScreen from "./app/Screens/MessagesScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/Screens/LoginScreen";

export default function App() {
	return <LoginScreen />;
}
