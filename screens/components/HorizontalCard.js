import { StyleSheet, Text, View,TouchableOpacity, Image, Pressable,ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import tulshiremove from './../../assets/tulshiremove.png'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useWishlist } from "../../StateMangement/WhistlistManagement";

const HorizontalCard = ({navigation,data}) => {
  const {addToCart}= useWishlist();
    const handleClick = ()=>{
        navigation.navigate('ProductDescription',{
            productdata:data,
        })
    }
  return (
    <Pressable style={styles.box} onPress={handleClick}>
        <View style={styles.productImage}>
        <Image source={tulshiremove} style={{width:220,height:200,marginLeft:-40,marginTop:-40}}  />

        </View>
        <View style={styles.mainSide}>
            <Text style={styles.headText}>{data.name}</Text>
            <ScrollView vertical showsVerticalScrollIndicator={false} style={{height:55}}>
          <Text style={{color:'gray'}}>
          {data.shortDesc}
          </Text>
          </ScrollView>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10,}}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:18,fontStyle:'italic'}}>₹ {data.price} </Text>
            <TouchableOpacity onPress={()=>addToCart(data)}>
              <LinearGradient
                colors={["#039551", "#039551"]}
                style={styles.button}
              >
                   <Ionicons
                name="add-outline"
                size={16}
                color={"white"}
              />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
    </Pressable>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
   box:{
    shadowOffset:{
        width:2,
        height:2,
       },
       shadowColor:'black',
       shadowOpacity:0.2,
       shadowRadius:2,
    marginHorizontal:10,
    backgroundColor:"#cef5e2",
    flexDirection:'row',
    gap:4,
    marginVertical:10,
    borderRadius:20,
    flex:1,
   },
   productImage:{
   
    backgroundColor:'#a6e0c5',
    height:'60%',
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:50,

   },
   headText:{
    color:"#039551",
    fontWeight:'bold',
    fontSize:22,
    marginTop:20,
   
},
mainSide:{
    flex:1,
    paddingHorizontal:10,
},
button:{
    padding:10,
    borderRadius:50,
    alignItems:'center',
},
});
