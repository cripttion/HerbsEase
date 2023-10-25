import { Text, StyleSheet, View ,SafeAreaView} from 'react-native'
import React, { Component } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
 const Profile=({navigation})=> {

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.body}>
        <Text>This is Profile Screen</Text>
        </View>
        <Bnavigation navigation={navigation} />
        </SafeAreaView>
    )
  
}
export default Profile

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