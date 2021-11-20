import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native';
import { useEffect } from 'react';

const ImageInput = ({imageUri }) => {
    useEffect(() => {
		requestPermission();
		
	}, [])
    const requestPermission = async () =>{
        const {granted} =  await ImagePicker.requestCameraRollPermissionsAsync();
        if(!granted){
            alert("you need permission to access the photos")
        }
     }

   const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('delete'  , 'are you sure you want to delete this image',[
        {text:'yes', onPress: ()=>onChangeImage(null)},
        {text:'No'}
    ]);
   }
   
   const selectImage  = async () =>{
       try {
           const result = await ImagePicker.launchImageLibraryAsync();
           if(!result.cancelled) return setImageUri(result.uri)
       } catch (error) {
           console.log("error loading image")
       }
   }

    return (
        <TouchableWithoutFeedback onPress = {handlePress}>
            
            <View style = {styles.container}>
                {!imageUri && <MaterialCommunityIcons color = {colors.mediumGray} name = "camera" size  ={40}/>}
                {imageUri && <Image source = {{uri:imageUri}} style  ={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        borderRadius:15,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image:{
        width: '100%',
        height:'100%',
    }
})
