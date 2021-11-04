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
	selectedItem,
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={styles.container}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={20}
							color={defaultStyles.colors.mediumGray}
							style={styles.icon}
						/>
					)}
					<AppText style={styles.text}>
						{selectedItem ? selectedItem.label : placeholder}
					</AppText>

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
						<PickerItem
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
		width: "100%",
		marginBottom: 15,
		marginTop: 10,
	},
	text: {
		flex: 1,
	},

	icon: {
		marginRight: 10,
	},
});
