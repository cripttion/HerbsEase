import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useWishlist } from '../../StateMangement/WhistlistManagement';

const AddCartButton = ({product}) => {
  const {cartList,
    addToCart}= useWishlist();
  const handleAddToCart = (product)=>{
    //handle to cart
    addToCart(product);
  }
  return (
    <View style={styles.main}>
      <Text style={{fontWeight:'bold',fontSize:18}}>₹ {product.price}</Text>
     
      <Pressable onPress={()=>handleAddToCart(product)}>
      <LinearGradient
                colors={["#039551", "#039551"]}
                style={styles.button}
              >
                  <Text style={{color:'white'}}>Add to Cart</Text> 
                   <Ionicons
                name="cart-outline"
                size={16}
                color={"white"}
              />
              
              </LinearGradient>
            </Pressable>
    </View>
  )
}

export default AddCartButton

const styles = StyleSheet.create({
    main:{
       flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        backgroundColor:'#cef5e2',
        borderRadius:20,
       shadowOffset:{
        width:2,
        height:2,
       },
       shadowColor:'black',
       shadowOpacity:0.5,
       shadowRadius:2
    },
    button:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        borderRadius:30,
        gap:10,

    }
})