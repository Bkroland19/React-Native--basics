import React, { useState, useEffect } from "react";
import { Switch, Text, TextInput, View } from "react-native";
import AppText from "./app/components/AppText";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import * as ImagePicker from "expo-image-picker";

import ListingEditScreen from "./app/Screens/ListingEditScreen";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function app2() {
	const [imageUris, setImageUris] = useState([]);
	const handleAdd = (uri) => {
		setImageUris([...imageUris, uri]);
	};

	const handleRemove = (uri) => {
		setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
	};

	return (
		// <ImageInputList
		// 	imageUris={imageUris}
		// 	onAddImage={handleAdd}
		// 	onRemoveImage={handleRemove}
		// />
		<ListingEditScreen />
	);
}
