import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Cart = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity>
      <Ionicons
            name="heart-outline"
            size={24}
            color='black'
          />
     
      </TouchableOpacity>
      <TouchableOpacity>
      <Ionicons
            name="cart-outline"
            size={24}
            color='black'
          />
      </TouchableOpacity>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  main:{
  
    flexDirection:"row",
    gap:10,
  }

})