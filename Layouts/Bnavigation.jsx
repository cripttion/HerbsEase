import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '../StateMangement/NavigationProvider';
import { useWhishList } from '../StateMangement/WhistlistManagement';
const Bnavigation = ({navigation}) => {
  const { activePage, onPageChange } = useNavigation(); // Use the custom hook to access the context
  const { cartList} = useWhishList();



  return (
    <View style={styles.NavMain}>
      <View style={styles.NavItems}>
        <TouchableOpacity
          style={styles.NavButton}
          onPress={() =>{ 
            onPageChange('Home');
            navigation.navigate('Home')
        }}
        >
          <Ionicons
            name="home-outline"
            size={22}
            color={activePage==='Home' ? '#649749' : 'black'}
          />
          <Text style={styles.NavText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.NavButton}
          onPress={() =>{ onPageChange('Likes')
                navigation.navigate('Likes')
        }
        }
        >
          <Ionicons
            name="heart-outline"
            size={22}
            color={activePage==='Likes'? '#649749' : 'black'}
          />
          <Text style={styles.NavText}>Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.NavButton}
          onPress={() => {onPageChange('Cart') 
          navigation.navigate('Cart')}}
        >
          <View style={styles.cartStyle}>
            <Ionicons
            name="cart-outline"
            size={22}
            color={activePage==='Cart' ? '#649749' : 'black'}
          />
          <Text style={{color:'white',backgroundColor:'red',borderRadius:50,width:18,height:18,textAlign:'center'}}>{cartList.length}</Text>
          </View>
          <Text style={styles.NavText}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.NavButton}
          onPress={() => {onPageChange('Profile')
           
          navigation.navigate('Profile')
        }}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color={activePage==='Profile' ? '#649749' : 'black'}
          />
          <Text style={styles.NavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavMain: {
    backgroundColor: 'white',
    height: 60,
  },
  NavItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Center items vertically
    paddingLeft: 10,
    paddingRight: 10,
  },
  NavText: {
    color: 'black',
  },
  NavButton: {
    alignItems: 'center', // Center items horizontally
  },
  cartStyle:{
    flexDirection:'row'
  }
});

export default Bnavigation;
