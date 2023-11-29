import { StyleSheet, Text, View,SafeAreaView, ScrollView,Image,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useWhishList } from '../StateMangement/WhistlistManagement'

const Cart = ({navigation}) => {
  const { cartList} = useWhishList();


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
     <ScrollView> 
    <View style={styles.heading}>
            <Text style={{fontSize:30, fontWeight:'bold',color:'#649749'}}>My Cart</Text>
        </View>
    {/* {Object.keys(storedData).map((key) => (
            <View key={key}>
              <Text>NameOfProduct: {storedData[key].NameOfProdut}</Text>
              <Text>Price: {storedData[key].Price}</Text>
            </View>
          ))} */}
          {cartList.map((product, index) => (
          <View key={index} style={styles.wCard}>
          <Image source={{ uri: `data:image/jpeg;base64,${product.Images[0].imgdata}` }} style={{ width: 100, height: 100, marginLeft: 10 }} />
            <View style={{flex:1}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>{product.NameOfProdut}</Text>
            <Text style={{fontWeight:'bold',fontSize:18}}> ₹ {product.Price}</Text>
            <View style={styles.addCart}>
          <TouchableOpacity >
            <Text style={{color:'white'}}>Add to cart</Text>
             </TouchableOpacity>
        </View>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
    <Bnavigation navigation={navigation} />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
   
    backgroundColor:'#FAFAFA',

},
body:{
    flex:1,
},
wCard:{
  flex:1,
  flexDirection:'row',
  backgroundColor:'#D3D3D3',
  backgroundColor:'white',
  width:'95%',
  height:120,
  padding:10,
  borderRadius:20,
  marginTop:10,
  gap:20,
  elevation:2,
},
heading:{
  marginTop:5,
  padding:10,


},
})