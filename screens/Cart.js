import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Bnavigation from '../Layouts/Bnavigation'
const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
    <Text>This is Home screen</Text>
    </View>
    <Bnavigation navigation={navigation} />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:30,
 justifyContent:'center',

},
body:{
    flex:1,
    alignItems:'center',
}
})