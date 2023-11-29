import {StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const ProductCard = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <TouchableOpacity onPress={()=>{props.onCardClick()}}>
    <View style={styles.main}>
      <View style={styles.Image}>
           <Image source={{ uri: props.url }} style={{ width: 100, height: 120}} />
      </View>
      <View style={styles.details}>
        <Text style={{fontWeight:'bold',fontSize:20,marginTop:7}}>{props.nameOfProduct}</Text>
        </View>
        <View style={styles.priceLine}>
        <Text style={{fontSize:18}}> ₹ {props.price} </Text>
        <TouchableOpacity onPress={()=>{props.onAddToWishlist()
        toggleLike()}} ><Ionicons
        name={isLiked ? "heart" : "heart-outline"} // Toggle between filled and outline heart icon
        size={24}
        color={isLiked ? 'red' : 'black'}
           
          /></TouchableOpacity>
        </View>
        {/* add to cart button */}
        <TouchableOpacity onPress={()=>{props.onAddToCart()}}>
        <View style={styles.addCart}>
         
            <Text style={{color:'white'}}>Add to cart</Text>
           
        </View>
        </TouchableOpacity>
    </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        
        borderRadius:20,
        marginTop:10,
        height:240,
        padding:10,
        borderColor:'black',
        borderWidth:1,
        
    },
    Image:{
      alignItems:'center',
      
    },
    details:{
      alignItems:'center'
    },
    priceLine:{
      flex:1,
    flexDirection:'row',
   marginTop:1,
   gap:60
    },
    addCart:{
      backgroundColor:'#649749',
      padding:5,
      marginTop:10,
      borderRadius:20,
      alignItems:'center'

    }



})