import { Text, StyleSheet, View ,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile=({navigation})=> {

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.body}>
        <View style={styles.heading}>
            <Text style={{fontSize:30, fontWeight:'bold',color:'#649749'}}> Profile</Text>
            </View>
            <View>
            <Image source={{ uri: "https://images.unsplash.com/photo-1701083266435-a56ea052fb60?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} style={styles.img} />

            </View>
          <View style={styles.name1}>
          <Ionicons
            name="person-outline"
            size={24}
            color='gray'
          />
            <Text style={{fontSize:18}}>Tanu Kesharwani</Text>
          </View>

          <View style={styles.name}>
          <Ionicons
            name="call-outline"
            size={24}
            color='gray'
          />
          <Text style={{fontSize:18}}>885698852</Text>
        </View>

          <View style={styles.name}>
          <Ionicons
            name="location-outline"
            size={24}
            color='gray'
          />
          <Text style={{fontSize:18}}>Nimbus express park view 1 chiv greater noida 211013</Text>
          </View>
          <View style={styles.name}>

        <TouchableOpacity style={{flexDirection:'row',gap:10}}>
        <Ionicons
            name="cube-outline"
            size={24}
            color='gray'
          />
            <Text style={{fontSize:18}}>Orders</Text></TouchableOpacity>
          </View>
          <View style={styles.order}>
        <TouchableOpacity style={{flexDirection:'row',gap:10}}>
        <Ionicons
            name="headset-outline"
            size={24}
            color='gray'
          />
            <Text style={{fontSize:18}}>Help</Text></TouchableOpacity>
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
        // marginTop:30,
        backgroundColor:'#FAFAFA',
       
    },
    body:{
        flex:1,
        margin:10,
        
    },
  
    img:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:10,
        marginLeft:10,
        borderColor:'#649749',
        borderWidth:4,

    },
    heading:{
        marginTop:5,
        padding:10,


    },
    name1:{
        gap:10,
        flexDirection:'row',
        marginTop:20,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        padding:10,
    },
    name:{
        gap:10,
        flexDirection:'row',
        borderBottomColor:'gray',
        borderBottomWidth:1,
        padding:10,
    },
    order:{
        flexDirection:'row',
        gap:10,
        padding:10,
    }
    

})