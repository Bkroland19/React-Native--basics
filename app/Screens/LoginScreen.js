import React from "react";
import { Formik } from "formik";
import { StyleSheet, Text, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import * as Yup from "yup";
import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image style={styles.logo} source={require("../assets/logo.png")} />

			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							keyboardType="email-address"
							icon="email"
							placeholder="Email"
							textContentType="emailAddress"
							onChangeText={handleChange("email")}
							onBlur={() => setFieldTouched("email")}
						/>
						<ErrorMessage error={errors.email} visible={touched.email} />
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							placeholder="password"
							textContentType="password"
							secureTextEntry
							onChangeText={handleChange("password")}
							onBlur={() => setFieldTouched("password")}
						/>
						<ErrorMessage error={errors.password} visible={touched.password} />
						<AppButton title="Log In" onPress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginBottom: 20,
		marginTop: 50,
	},
});
