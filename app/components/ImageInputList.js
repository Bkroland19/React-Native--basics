import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ImageInputList = ({imageUris = [] , onRemoveImage , onAddImage}) => {
    return (
        <View style = {styles.container}>
            {imageUris.map(uri => <ImageInput key = {uri} imageUri = {uri} onChangeImage = {()=>onRemoveImage(uri)} />)}
        </View>
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
})
