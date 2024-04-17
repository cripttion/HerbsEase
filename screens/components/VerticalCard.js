import { StyleSheet, Text, View,TouchableOpacity, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import tulshiremove from './../../assets/tulshiremove.png'
import Ionicons from "@expo/vector-icons/Ionicons";
import { useWishlist } from "../../StateMangement/WhistlistManagement";

const VerticalCard = ({navigation,data}) => {
  const{addToCart} = useWishlist();
    const handleOnPress = ()=>{
        navigation.navigate('ProductDescription',{
            productdata:data,
        })
    }
  return (
    <Pressable style={styles.box} onPress={handleOnPress}>
    <View style={styles.main}>
    <View style={styles.maintop}>
        <Text style={styles.headText}>{data.name}</Text>
        
      </View>
        <View style={{padding:10,zIndex:3,}}>
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
      
    </View>
    <View style={styles.prodcutImage}>
        <Image source={tulshiremove} style={{width:220,height:200,marginRight:-60,marginTop:-40}}  />
         </View>
    </Pressable>
  );
};

export default VerticalCard;

const styles = StyleSheet.create({
   box:{
    
    width:200,
  
    marginRight:10,
    
   },
    main:{
        backgroundColor:'#cef5e2',
        flex:1,
        width:200,
        borderRadius:20,
        marginTop:50,
        zIndex:1,
       
    },
    maintop:{
        height:110,
        backgroundColor:'#a6e0c5',
        zIndex:1,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        borderBottomRightRadius:50,
    },
    headText:{
        color:"#039551",
        fontWeight:'bold',
        fontSize:22,
        padding:10,
        marginTop:60
       
    },
    button:{
        padding:10,
        borderRadius:50,
        alignItems:'center',
    },
    prodcutImage:{
        position:'absolute',
        right:0,
        zIndex:1,
    }
});
