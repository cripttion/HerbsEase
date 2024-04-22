import { StyleSheet, Text, View,Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import success from './../../assets/Successfully.gif';
const SucessModal = ({navigation}) => {
  const[modalVisible,setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            {/* <Ionicons name="check" size={60} color="greem" /> */}
            <Image source={success} style={{width:150,height:150,alignItems:'center'}} />
            </View>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Thank You </Text>
            <Pressable
              onPress={() =>{setModalVisible(false)
                navigation.navigate('Home')}}
              style={{ flexDirection: "row",alignItems:'center',marginTop:30,backgroundColor:'#039551' ,padding:10,borderRadius:20 }}
            >
              <Text style={{color:'#fff'}}>Check other products</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
  )
}

export default SucessModal

const styles = StyleSheet.create({
  centeredView:{
   
  
    flexGrow:1,
     backgroundColor:'red',
     opacity:0.8

  },
  modalView: {
    padding: 10,
    backgroundColor:'#fff',
    elevation:5,
    flex:1,
    position:'absolute',
    top:200,
    bottom:200,
    right:50,
    left:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,


  },
})