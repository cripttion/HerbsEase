import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,Image,ScrollView,Alert } from 'react-native'
import React from 'react'
import ProductCard from '../components/ProductCard';
import Bnavigation from '../Layouts/Bnavigation';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useWhishList } from '../StateMangement/WhistlistManagement';
export default function FilteredProduct({route,navigation}) {
    const { filteredData } = route.params;
    const { wishlist, setWishlist ,cartList,setCartList} = useWhishList();
    const createTwoButtonAlert = (product) =>
    Alert.alert('Hello there!', 'Will I add this to you Cart ?', [
      {
        text: 'No thanks',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => {handleAddToCart(product)}},
    ]);
    const handleAddToWishlist = (product) => {
      // Add or remove the product from the wishlist
      const updatedWishlist = wishlist.includes(product)
        ? wishlist.filter((item) => item !== product)
        : [...wishlist, product];
      setWishlist(updatedWishlist);
    };
    
    const handleAddToCart =(product)=>{
      const updatedCart = [...cartList, product];
      setCartList(updatedCart);
      
    }
    const handleCardClick =(product)=>{
      navigation.navigate('productDescription',{product});
    }
    const handleBack=()=>{
        navigation.navigate('Home');
      }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
        <View style={styles.backButton}>
  <TouchableOpacity onPress={handleBack}>  
<Ionicons
            name="arrow-back-outline"
            size={30}
            color='white'
          />
          </TouchableOpacity>
          <Text style={{fontSize:30,color:'white'}}>Herbs Ease</Text>
</View>
            {filteredData.length==0?<><Text style={{fontSize:30,color:'#649749',fontWeight:'bold'}}>No result found</Text></>:<>
        <ScrollView style={{ marginTop: 10 }}>
  <View style={styles.CardWrap}>
    {filteredData.map((product, index) => (
      
      <ProductCard 
        key={index}
        url={`data:image/jpeg;base64,${product.Images[0].imgdata}`}        nameOfProduct={product.NameOfProdut}
        price={product.Price}
        onAddToWishlist={() => handleAddToWishlist(product)}
        onAddToCart ={()=>createTwoButtonAlert(product)}
        onCardClick = {()=>handleCardClick(product)}
        />
    ))}
  </View>
</ScrollView>
</>}
        </View>

        <Bnavigation navigation={navigation} />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop:30,
        backgroundColor:'#FAFAFA',
       
    },
    body:{
        flex:1,
        
    },
    CardWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginHorizontal: 10,
      },
      backButton:{
   
        flexDirection:'row',
        alignItems:'center',
        gap:30,
        backgroundColor:'#649749'
      },
})