import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
	const scrollView = useRef(initialValue);

	return (
		//!always wrap the scroll view inside of a view because by the default the view takes up the size of the content but the scroll view for it grows to take the entire screen

		<View>
			<ScrollView
				ref={scrollView}
				horizontal
				onContentSizeChange={() => scrollView.current.scrollToEnd()}
			>
				<View style={styles.container}>
					{imageUris.map((uri) => (
						<View key={uri} style={styles.image}>
							<ImageInput
								imageUri={uri}
								onChangeImage={() => onRemoveImage(uri)}
							/>
						</View>
					))}
					<ImageInput onChangeImage={(uri) => onAddImage(uri)} />
				</View>
			</ScrollView>
		</View>
	);
};

export default ImageInputList;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginRight: 10,
	},
});
