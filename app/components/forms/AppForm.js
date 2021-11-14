import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

const AppForm = ({ onSubmit, initialValues, validationSchema, children }) => {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{() => <>{children}</>}
		</Formik>
	);
};

export default AppForm;

const styles = StyleSheet.create({});
