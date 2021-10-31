import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Platform,
	Modal,
	TouchableWithoutFeedback,
	Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
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
					<AppText style={styles.text}>{placeholder}</AppText>

					<MaterialCommunityIcons
						name="chevron-down"
						size={20}
						color={defaultStyles.colors.mediumGray}
					/>
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Button title="close" onPress={() => setModalVisible(false)} />
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
