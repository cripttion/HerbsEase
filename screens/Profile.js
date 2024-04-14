import { Text, StyleSheet, View ,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React, { Component,useState } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLoginList } from '../StateMangement/LoginManager';
import Main from './Main';
const Profile=({navigation})=> {
  const[key,setkey]= useState(0);
  const{isLoggedIn,setIsLoggedIn} = useLoginList();
const handleLogout = async()=>{
 await AsyncStorage.removeItem('token');
 setIsLoggedIn(false);
 setkey(prev=>prev+1);

 navigation.navigate('Login');

}
    return (
      <Main navigation={navigation}>
       
        </Main>
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