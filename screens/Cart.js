import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = ({navigation}) => {
  const [storedData, setStoredData] = useState([]);

  // Step 2: Use the useEffect hook to retrieve and set the data when the component mounts
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const data = await AsyncStorage.getItem('cartData');
        if (data !== null) {
          // Data was found
          // Step 3: Set the retrieved data in the component's state
          setStoredData(JSON.parse(data));
          
        } else {
          // No data found for the specified key
          console.log('No data found for the key: yourKey');
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    };

    // Call the function to retrieve data when the component mounts
    retrieveData();
  }, []); // The empty de
  console.log(storedData);
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
     <ScrollView> 
    <Text>Stored Data:</Text>
    {Object.keys(storedData).map((key) => (
            <View key={key}>
              <Text>NameOfProduct: {storedData[key].NameOfProdut}</Text>
              <Text>Price: {storedData[key].Price}</Text>
            </View>
          ))}

      </ScrollView>
    </View>
    <Bnavigation navigation={navigation} />
    </SafeAreaView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin:20,
    backgroundColor:'#FAFAFA',

},
body:{
    flex:1,
}
})