import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '../StateMangement/NavigationProvider';
const Bnavigation = ({navigation}) => {
  const { activePage, onPageChange } = useNavigation(); // Use the custom hook to access the context
 


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
            name="home"
            size={22}
            color={activePage==='Home' ? 'orange' : 'white'}
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
            name="heart"
            size={22}
            color={activePage==='Likes'? 'orange' : 'white'}
          />
          <Text style={styles.NavText}>Likes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.NavButton}
          onPress={() => {onPageChange('Cart') 
          navigation.navigate('Cart')}}
        >
          <Ionicons
            name="cart"
            size={22}
            color={activePage==='Cart' ? 'orange' : 'white'}
          />
          <Text style={styles.NavText}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.NavButton}
          onPress={() => {onPageChange('Profile')
           
          navigation.navigate('Profile')
        }}
        >
          <Ionicons
            name="person"
            size={22}
            color={activePage==='Profile' ? 'orange' : 'white'}
          />
          <Text style={styles.NavText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavMain: {
    backgroundColor: 'green',
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
    color: 'white',
  },
  NavButton: {
    alignItems: 'center', // Center items horizontally
  },
});

export default Bnavigation;
