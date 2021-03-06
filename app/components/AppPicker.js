import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Modal,
	TouchableWithoutFeedback,
	Button,
	FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
	icon,
	placeholder,
	items,
	onSelectItem,
	PickerItemComponent = PickerItem,
	selectedItem,
	width = "100%",
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[styles.container, { width }]}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.mediumGray}
							style={styles.icon}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.mediumGray}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen>
					<Button title="close" onPress={() => setModalVisible(false)} />
				</Screen>
				<FlatList
					data={items}
					keyExtractor={(item) => item.value}
					renderItem={({ item }) => (
						<PickerItemComponent
							item={item}
							label={item.label}
							onPress={() => {
								setModalVisible(false);
								onSelectItem(item);
							}}
						/>
					)}
				/>
			</Modal>
		</>
	);
};

export default AppPicker;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: defaultStyles.colors.lightGray,
		borderRadius: 25,
		flexDirection: "row",

		marginBottom: 15,
		marginTop: 10,
	},
	placeholder: {
		color: defaultStyles.colors.mediumGray,
		flex: 1,
	},
	text: {
		flex: 1,
	},

	icon: {
		marginRight: 10,
	},
});
