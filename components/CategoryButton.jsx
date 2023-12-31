import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryButton = (props) => {
  return (
    <TouchableOpacity style={styles.mains}  onPress={()=>{props.onProductfilter()}}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
 mains:{
    backgroundColor:'#649749',
    padding:10,
    borderRadius:20,
    marginRight:5,
 },
 text:{
    color:'white',
 }
})