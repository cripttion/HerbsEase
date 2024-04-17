import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { useWishlist } from "../StateMangement/WhistlistManagement";
import CheckOutModel from "./components/CheckOutModel";

const CheckoutCart = () => {
  const [cartData, setCartData] = useState([]);
  const{cartList,removeFromCart,addToCart} = useWishlist();
  const [modalVisible, setModalVisible] = useState(false);
  const[address,setAddress]=useState({});
  useEffect(() => {
    const getData = async () => {
      let data = await AsyncStorage.getItem("cartList");
      data = JSON.parse(data);
      setCartData(data);
    };
    getData();
  }, [cartList]);

const total = cartData.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  return (
    <>
    <ScrollView
      showsVerticalScrollIndicator={false}
      vertical
      style={{ flex: 1, }}
    >
      {cartData.map((data, index) => (
        <Pressable style={styles.box} key={index}>
          <View style={styles.productImage}>
            <Image
              source={{
                uri: `https://herbease.onrender.com/products/${data.imagePaths[0].substring(
                  17
                )}`,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.mainSide}>
            <Text style={styles.headText}>{data.name}</Text>
            <View style={styles.bottomContainer}>
              <Text style={styles.priceText}>₹ {data.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity style={styles.quantityButton} onPress={()=>removeFromCart(data)}>
                  <Ionicons name="remove" size={16} color={"white"} />
                </TouchableOpacity>
                <Text style={{ fontSize: 16,marginHorizontal:20 }}>{data.quantity}</Text>
                <TouchableOpacity style={styles.quantityButton}onPress={()=>addToCart(data)}>
                  <Ionicons name="add" size={16} color={"white"} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
         </ScrollView>
      <View style={styles.bottombar}>
        <View style={styles.main}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>₹ {total}</Text>

          <Pressable onPress={()=>setModalVisible(true)}>
            <LinearGradient
              colors={["#039551", "#039551"]}
              style={styles.button}
            >
              <Text style={{ color: "white" }}>Check-out</Text>
              <Ionicons name="cart-outline" size={16} color={"white"} />
            </LinearGradient>
          </Pressable>
        </View>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{ flexDirection: "row-reverse" }}
            >
              <Ionicons name="close-outline" size={28} color="black" />
            </Pressable>
            <View>
              <CheckOutModel  />
            </View>
          </View>
        </Modal>
      </View>
 </>
  );
};

export default CheckoutCart;

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
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    marginTop:5, 
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
    backgroundColor: "#f0f0f0",
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

  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#cef5e2",
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  button: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    gap: 10,
  },
  centeredView:{
   
     
     
  },
  modalView: {
    padding: 10,
    backgroundColor:'#fff',
    elevation:5,
    flex:1,

  },
});
