import { StyleSheet, Text, View,SafeAreaView, ScrollView,Image,TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import { useWhishList } from '../StateMangement/WhistlistManagement'

const Cart = ({navigation}) => {
  const { cartList} = useWhishList();
  const [totalPrice, setTotalPrice] = useState(0);
  const [uniqueProducts, setUniqueProducts] = useState([]);
  useEffect(() => {
    const calculateTotalPriceAndFilterDuplicates = () => {
      const uniqueProductSet = new Set();
      const uniqueProductsArray = cartList.filter((product) => {
        if (uniqueProductSet.has(product._id)) {
          return false; // Duplicate, filter it out
        }
        uniqueProductSet.add(product._id);
        return true;
      });

      const total = uniqueProductsArray.reduce((accumulator, product) => {
        // Assuming product.Price is a string, convert it to a number before adding
        const price = parseFloat(product.Price);
        return accumulator + price;
      }, 0);

      setUniqueProducts(uniqueProductsArray);
      setTotalPrice(total);
    };

    calculateTotalPriceAndFilterDuplicates();
  }, [cartList]);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
            <Text style={{fontSize:30, fontWeight:'bold',color:'#649749'}}>My Cart</Text>
        </View>
    <View style={styles.body}>
     <ScrollView> 
  
          {uniqueProducts.map((product, index) => (
          <View key={index} style={styles.wCard}>
          <Image source={{ uri: `data:image/jpeg;base64,${product.Images[0].imgdata}` }} style={{ width: 100, height: 100, marginLeft: 10 }} />
            <View style={{flex:1}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>{product.NameOfProdut}</Text>
            <Text style={{fontWeight:'bold',fontSize:18}}> ₹ {product.Price}</Text>
            <View style={styles.addCart}>
          <TouchableOpacity >
            <Text style={{color:'white'}}>Buy Now</Text>
             </TouchableOpacity>
        </View>
            </View>
            
          </View>
        ))}

      </ScrollView>
    </View>
    <View style={styles.base}>
        <Text style={{color:'white',fontSize:18}}> Total Price: ₹ {totalPrice}</Text>
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
  width:'100%',
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
addCart:{
  backgroundColor:'#649749',
  padding:5,
  marginTop:10,
  borderRadius:20,
  alignItems:'center'

},
base:{
  backgroundColor:'#649749',
  padding:5,
  
}
})