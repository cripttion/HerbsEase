import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationProvider } from './StateMangement/NavigationProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WhistList from './screens/WhistList';
import Cart from './screens/Cart';
import Profile from './screens/Profile';
import { WhistlistManagement } from './StateMangement/WhistlistManagement';
import React, { useCallback, useEffect, useState } from 'react';
import ProductDescription from './screens/ProductDescription';
import FilteredProduct from './screens/FilteredProduct';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationProvider>  
    <WhistlistManagement>
    <NavigationContainer>  
      <Stack.Navigator screenOptions={{
            animation: 'none',
            headerShown:false // Disable animations for the entire stack
          }}> 

      <Stack.Screen name='Home' component={Home} />
        
      <Stack.Screen name='Likes' component={WhistList} 
           />
      <Stack.Screen name='Cart' component={Cart}  />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name ='productDescription' component={ProductDescription} />
    <Stack.Screen name ='filteredProducts' component={FilteredProduct} />
      </Stack.Navigator>
      </NavigationContainer>
      </WhistlistManagement>
      </NavigationProvider>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
