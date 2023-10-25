import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import React from 'react'
import Bnavigation from '../Layouts/Bnavigation'

const WhistList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
    <Text>This is Like Screen</Text>
    </View>
    <Bnavigation navigation={navigation} />
    </SafeAreaView>
  )
}

export default WhistList

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