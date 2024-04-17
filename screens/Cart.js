import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React,{useEffect,useState} from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useWishlist } from "../StateMangement/WhistlistManagement";
import { Link } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Cart = ({navigation}) => {
  const [cartData, setCartData] = useState([]);
  const{cartList,removeFromCart,addToCart} = useWishlist();
  useEffect(() => {
    const getData = async () => {
      let data = await AsyncStorage.getItem("cartList");
      data = data?JSON.parse(data):[];
      
      setCartData(data);
    };
    getData();
  }, [cartList]);
   
  return (
    <View style={styles.main}>
      <Link to={{ screen: 'WishList'}}>
        <Ionicons name="heart-outline" size={24} color="black" />
       
      </Link>
      <Link to={{ screen: 'CheckoutCart'}}>
        <Ionicons name="cart-outline" size={24} color="black" />
        
      </Link>
      {cartData.length>0&&<View style={styles.text}>
        <Text style={{color:'white'}}>{cartData.length}</Text>
        </View>}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    gap: 10,
  },
  text: {
  
    position: "absolute",
    top: -10,
    right: 5,
    backgroundColor:"red",
    paddingRight:5,
    paddingLeft:5,
  
    borderRadius:50,

    height:20,
    fontSize:2
  },
});
