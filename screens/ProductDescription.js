import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import AddCartButton from "./components/AddCartButton";
import tulshiremove from "./../assets/tulshiremove.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import tulshiImage1 from "./../assets/tulshiImage1.jpeg";

const ProductDescription = ({ route, navigation }) => {
  const [heart, setHeart] = useState(false);
  const heartPressed = () => {
    setHeart(!heart);
  };
  const {productdata} = route.params;
  
  const sharePressed = () => {};
  return (
    <>
    <ScrollView style={styles.main}>
      <View style={styles.section1}>
        <View style={styles.patch}></View>
        <View style={styles.heart}>
          <TouchableOpacity onPress={heartPressed}>
            <Ionicons
              name={heart ? "heart" : "heart-outline"}
              size={30}
              color={heart ? "red" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={sharePressed}>
            <Ionicons name="share-social-outline" size={30} color={"black"} />
          </TouchableOpacity>
        </View>
         
        <View>
          <Image
            source={tulshiremove}
            style={{
              width: 350,
              height: 450,
              marginLeft: -60,
              marginTop: -20,
              overflow: "visible",
              zIndex: 10,
            }}
          />
        </View>
      </View>
      <View style={styles.section2}>
        <Text style={styles.brandText}>{productdata.name}</Text>
        <Text
          style={{
            color: "gray",
            marginHorizontal: 10,
            marginTop: 40,
            textAlign: "justify",
            fontSize: 14,
          }}
        >
        {productdata.longDesc}
          
        </Text>

        <View style={{marginHorizontal:10}}>
          <Text style={{color:"#039551",marginVertical:15,fontSize:22,fontWeight:'600',}}>Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.photosection}>
            {productdata.imagePaths.map((data,index)=>(
            <View key={index}>
            <Image source={
              {uri:`http://192.168.224.144:3000/products/${data.substring(17)}`}
            } style={{width:150,height:150,marginRight:5,borderRadius:20}} />
              </View>

            ))}
          
          </ScrollView>
        </View>
      </View>

      
    </ScrollView>
    <View style={styles.bottombar}>
        <AddCartButton product={productdata}/>
      </View>
    </>
  );
};

export default ProductDescription;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#cef5e2",
  },
  bottombar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // Adjust the background color as needed
    paddingVertical: 10, // Add padding if needed
    paddingHorizontal: 20, // Add padding if needed
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between", // Space the items evenly
    alignItems: "center", // Align items vertically
  },
  section1: {
    height: "40%",
    flexDirection: "row",
  },
  section2: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: "60%",
    backgroundColor: "#fff",
  },
  patch: {
    width: 200,
    height: 100,
    backgroundColor: "#a6e0c5",
    position: "absolute",
    top: 0,
    borderBottomRightRadius: 50,
  },
  brandText: {
    fontSize: 30,
    width: 165,
    alignSelf: "flex-end",

    marginVertical: 10,
    color: "#039551",
    fontWeight: "bold",
  },
  heart: {
    position: "absolute",
    top: 0,
    right: 0,
    marginHorizontal: 20,
    flexDirection: "column",
    gap: 20,
    marginVertical: 20,
    alignSelf: "flex-end",
  },
  photosection:{
    flexDirection:'row',
   
  }
});
