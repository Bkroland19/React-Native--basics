import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
	AppForm as Form,
	AppFormField as FormField,
	AppFormPicker as Picker,
	SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label("Title"),
	price: Yup.number().required().min(1).max(10000).label("Price"),
	description: Yup.string().label("Description"),
	category: Yup.object().required().nullable().label("Category"),
	images: Yup.array().min(1, "please select atleast one image"),
});

const categories = [
	{ label: "Furniture", value: 1, backgroundColor: "red", icon: "apps " },
	{ label: "Clothing", value: 2, backgroundColor: "green", icon: " email" },
	{ label: "Camera", value: 3, backgroundColor: "blue", icon: " lock " },
];

function ListingEditScreen() {
	const location = useLocation();
	return (
		<Screen style={styles.container}>
			<Form
				initialValues={{
					title: "",
					price: "",
					description: "",
					category: null,
					images: [],
				}}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormImagePicker name="images" />
				<FormField maxLength={255} name="title" placeholder="Title" />
				<FormField
					keyboardType="numeric"
					maxLength={8}
					name="price"
					placeholder="Price"
				/>
				<Picker
					items={categories}
					PickerItemComponent={CategoryPickerItem}
					name="category"
					placeholder="Category"
					width="50%"
				/>
				<FormField
					maxLength={255}
					multiline
					name="description"
					numberOfLines={3}
					placeholder="Description"
				/>
				<SubmitButton title="Post" />
			</Form>
		</Screen>
	);
}

export default ListingEditScreen;
const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
