import { TouchableOpacity,Image,StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import { useWhishList } from '../StateMangement/WhistlistManagement'
const WhistList = ({navigation}) => {
  const { wishlist, setWishlist } = useWhishList();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.body}>
      <View style={styles.heading}>
            <Text style={{fontSize:30, fontWeight:'bold',color:'#649749'}}> WishList</Text>
        </View>
        {wishlist.map((product, index) => (
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
      </View>
    </ScrollView>
    <Bnavigation navigation={navigation} />
  </SafeAreaView>
  )
}

export default WhistList

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        backgroundColor:'#FAFAFA',
    
    },
    heading:{
      marginTop:5,
      padding:10,


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
    addCart:{
      backgroundColor:'#649749',
      padding:5,
      marginTop:10,
      borderRadius:20,
      alignItems:'center'

    }
})