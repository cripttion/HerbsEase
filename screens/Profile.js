import { Text, StyleSheet, View ,SafeAreaView} from 'react-native'
import React, { Component } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile=({navigation})=> {

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.body}>
         <View style={styles.profileIcon}>
            <View style={styles.icon}>
                <Ionicons
                name="person-circle"
                size={40}
                color='white'
            />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Tanu Kesharwani</Text>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Text style={{fontSize:16}}>Female</Text>
                    <Ionicons
                name="transgender"
                size={24}
                color='red'
            />
            </View>
           
            </View>
         </View>
        <View style={{borderBottomWidth:2,borderBottomColor:'black'}}>

        </View>

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
       
    },
    body:{
        flex:1,
        margin:10,
        
    },
    profileIcon:{
     
        flexDirection:'row',
        gap:20,
       

    },
    icon:{
        width:60,
        height:60,
        backgroundColor:'gray',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'

    }
  

})