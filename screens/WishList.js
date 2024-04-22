import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useWishlist } from "../StateMangement/WhistlistManagement";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
const WishList = ({ navigation }) => {
  const { wishlist, addToWishlist, removeFromWishlist,addToCart } = useWishlist();
  const [datas, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let value = await AsyncStorage.getItem("wishlist");
      value = JSON.parse(value);
      setData(value?value:[]);
    };
    getData();
  }, [wishlist]);
  return (
    <ScrollView showsVerticalScrollIndicator={false} vertical>
      {datas.map((data, index) => (
        <View key={index}>
          <Pressable
            style={styles.box}
            key={index}
            onPress={() =>
              navigation.navigate("ProductDescription", {
                productdata: data,
              })
            }
          >
            <View style={styles.productImage}>
              <Image
                s source={{ uri: `data:image/jpeg;base64,${data.imagePaths[0].data}` }}
                style={styles.image}
              />
            </View>
            <View style={styles.mainSide}>
              <Text style={styles.headText}>{data.name}</Text>
              <Text style={{color:'gray',height:55}}>{data.shortDesc}</Text>
              <View style={styles.bottomContainer}>
                <Text style={styles.priceText}>₹ {data.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => addToCart(data)}
                  >
                    <Text style={{ color: "#fff" }}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default WishList;

const styles = StyleSheet.create({
  box: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginHorizontal: 10,
    backgroundColor: "#cef5e2",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  productImage: {
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#039551",
    marginBottom: 5,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#039551",
    borderRadius: 5,
    padding: 5,
    marginLeft: 40,
  },
  quantityButton: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: "#039551",
    marginHorizontal: 5,
  },
  mainSide:{
    flex:1
  }
});
