import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Main from './Main';
import HorizontalCard from './components/HorizontalCard';

const SearchedProduct = ({route,navigation}) => {
 const {searchText} = route.params;
 const[data,setData] = useState([]);
 const[loading,setLoading]=useState(false);
 useEffect(()=>{
    setLoading(true)
    const getData = async()=>{
        const response = await axios.get(`https://herbease.onrender.com/product/search/${searchText}`)
        if(response.status===200)
        {
            setData(response.data);
            setLoading(false)
        }
        else{
            Alert.alert('Unable to find ')
            navigation.navigate('Home');
        }
        
    }
    getData();
 },[])
  return (
    <Main>
    <ScrollView showsVerticalScrollIndicator={false} vertical style={{marginHorizontal:0}}>
    <Text style={{fontWeight:'bold',fontSize:16,fontStyle:'italic',marginTop:5}}>search for:{searchText}/</Text>
      <ScrollView  vertical showsVerticalScrollIndicator={false} style={{marginTop:20}}>
            {data.map((data, index) => (
              <View key={index}>
                <HorizontalCard navigation={navigation} data={data} />
              </View>
            ))}
          </ScrollView>
    </ScrollView>
    </Main>
  )
}

export default SearchedProduct

const styles = StyleSheet.create({})