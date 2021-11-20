import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
	const { setFieldTouched, touched, handleChange, errors } = useFormikContext();
	return (
		<>
			<AppTextInput
				onChangeText={handleChange(name)}
				onBlur={() => setFieldTouched(name)}
				{...otherProps}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</>
	);
};

export default AppFormField;

const styles = StyleSheet.create({});
