import React, { useState } from 'react';
import { View, Button, Image, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Ionicons from "@expo/vector-icons/Ionicons";

const FileSelect = ({setImage,onsends}) => {
  const [image, setImages] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImages(result.assets[0].uri)
      // You can call your API here with the selected image
      // uploadImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let cameraPermission = await Camera.requestCameraPermissionsAsync();
    if (cameraPermission.status !== 'granted') {
      alert('Camera permission is required to take a photo.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setImages(result.assets[0].uri)
      // uploadImage(result.assets[0].uri);
    }
  };

  // const uploadImage = async (uri) => {
  //   // Implement your image upload logic here
  //   console.log('Image uploaded:', uri);
  // };

  return (
    <>
    <View style={{ flexDirection:'row',alignItems: 'center', justifyContent: 'center' }}>
      <Pressable  onPress={pickImage} style={{marginHorizontal:20}} >
      <Ionicons name="images" size={30} color="black" />
        </Pressable>
      <Pressable style={{marginHorizontal:20}} onPress={takePhoto} ><Ionicons name="camera" size={30} color="black" /></Pressable>
      
    </View>
    {image && <View style={{flexDirection:'row',alignItems:'flex-end'}}>
     <Image source={{ uri: image }} style={{ alignItems:'center',width: 200, height: 200, marginTop: 20 }} />
    <Pressable  onPress={onsends} style={{marginHorizontal:20}} >
      <Ionicons name="send" size={30} color="black" />
        </Pressable>
      </View>}
    </>
  );
};

export default FileSelect
