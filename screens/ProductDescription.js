import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AddCartButton from "./components/AddCartButton";
import tulshiremove from "./../assets/tulshiremove.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import tulshiImage1 from "./../assets/tulshiImage1.jpeg";
import { useWishlist } from "../StateMangement/WhistlistManagement";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProductDescription = ({ route, navigation }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { productdata } = route.params;
  const [wishData, setWishData] = useState([]);
  const [heart, setHeart] = useState(false);
  const heartPressed = () => {
    if (heart) {
      setHeart(false);
      removeFromWishlist(productdata);
    } else {
      setHeart(true);
      addToWishlist(productdata);
    }
  };
  useEffect(() => {
    const getData = async () => {
      let data = await AsyncStorage.getItem("wishlist");
      data = JSON.parse(data);
      const existingProduct = data.find((item) => item._id === productdata._id);
      if (existingProduct) {
        setHeart(true);
      }
      setWishData(data);
    };
    getData();
  }, []);

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
              source={{
                uri: `https://herbease.onrender.com/Element/${productdata.element.imagePaths[0].substring(
                  16
                )}`,
              }}
              onError={(e) => {
                e.target.source = {uri: `data:image/jpeg;base64,${productdata.imagePaths[0].data}`},
                e.target.width = 200,
                e.target.height=200,
                e.target.marginLeft=60
                  
                
              }}
              style={{
                width: 350,
                height: 350,
                marginLeft: -60,
                marginTop: -20,
                overflow:'hidden',
                zIndex: 1,
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

          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                color: "#039551",
                marginVertical: 15,
                fontSize: 22,
                fontWeight: "600",
              }}
            >
              Photos
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.photosection}
            >
              {productdata?.imagePaths.map((data, index) => (
                <View key={index}>
                  <Image
                    source={{ uri: `data:image/jpeg;base64,${data.data}` }}
                    style={{
                      width: 150,
                      height: 150,
                      marginRight: 5,
                      borderRadius: 20,
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottombar}>
        <AddCartButton product={productdata} />
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
    zIndex:40,
    alignSelf: "center",

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
  photosection: {
    flexDirection: "row",

  },
});
