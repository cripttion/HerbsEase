import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from "@expo/vector-icons/Ionicons";

const Filter = () => {
  return (
    <View style={styles.filtermain}>
      <View>
        <TouchableOpacity 
           styles={styles.filtericonbox}>
           <Ionicons name="filter-outline" size={24} color="gray" />
           </TouchableOpacity>
      </View>
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({
    filtermain:{
        alignItems:'center',
        padding:10,
        backgroundColor:'white',
        borderRadius:20,
        marginRight:10,

    }
})