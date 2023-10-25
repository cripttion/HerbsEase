import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import HorizontalCard from '../components/HorizontalCard'
import CategoryButton from '../components/CategoryButton'
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductCard from '../components/ProductCard'

const Home = ({navigation}) => {
    const[searchInput,setSearchInput] = useState("");
    function handleTextChange(e) {
        setSearchInput(e);
    }
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.body}>
        
     <ScrollView horizontal style={styles.scrollBar}>
        <HorizontalCard url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhoW3Lue5lNqjFf_DeaMEWBMGL6aAhOhIDT7FMPrO44OBkiz6fncxTfVDBqxOquzinqI&usqp=CAU"/>
        <HorizontalCard /> 
         <HorizontalCard />
     </ScrollView>

     {/* Search Bar */}
     <View style={styles.searchView}>
            <TextInput 
                placeholder='Search Here....' 
                style={styles.textInput} 
                onChangeText={handleTextChange}
                value={searchInput}
                multiline={true}
                // numberOfLines={10}
                placeholderTextColor="gray"
                />
                <TouchableOpacity style={{padding:10, backgroundColor:'green',borderRadius:20,}}><Text style={{color:'white'}}>Serach</Text></TouchableOpacity>
        </View>

        {/* Category of plant section */}
        <ScrollView horizontal style={{marginTop:15,marginLeft:10}}> 
            <CategoryButton text="All"/>
            <CategoryButton text="Medical Plant"/>
            <CategoryButton text="Vegetables"/>
            <CategoryButton text="Fruits"/> 
            <CategoryButton text="Herbs"/>  
            <CategoryButton text="Medicines"/>         
         </ScrollView>
 {/* Trending product heading  */}
        <View style={{marginTop:10,marginLeft:10,flex:1,flexDirection:'row',gap:10,}}>
            <View>
            <Text style={{fontSize:20,fontWeight:'bold'}} >Trending Products</Text>
            <View style={styles.underline}></View>
            </View>
            <Ionicons
            name="trending-up-outline"
            size={24}
            color='green'
          />

        </View>
       {/* Trending product cards  */}
       <FlatList style={styles.cardContainer} number>
            <ProductCard 
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUhoW3Lue5lNqjFf_DeaMEWBMGL6aAhOhIDT7FMPrO44OBkiz6fncxTfVDBqxOquzinqI&usqp=CAU" 
            nameOfProduct="Tulsi"
            />
            <ProductCard url="https://your-second-image-url-here.com" />
            <ProductCard url="https://your-second-image-url-here.com" />
            <ProductCard url="https://your-second-image-url-here.com" />
</FlatList>
    </View>
    </ScrollView>
    <Bnavigation navigation={navigation} />
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
      backgroundColor:'#D3D3D3',
     
     marginTop:30,
    
    },
    body:{
        flex:1,
  
    },
    scrollBar:{
        marginTop:20,
        marginLeft:10,

    },
    searchView:{
    flex:1,
    marginTop:20,
    flexDirection:'row',
     marginLeft:10,
    gap:10,
    

    },
    textInput:{
        
     backgroundColor:'white',
     width:'75%',
     paddingHorizontal:20,
     borderColor:'black',
     borderWidth:1,
     padding:5,
     borderRadius:20,
     color:'black',
     fontFamily:'monospace',
    },
    underline: {
        marginTop:2,
        borderBottomWidth: 1, // Adjust the thickness of the underline as needed
        borderColor: 'green',
        width:'70%' // Change the color of the underline as needed
      },
      cardContainer: {
        flex:2,
        flexDirection: 'row', // Arrange items horizontally
        justifyContent: 'space-between', // Spread items evenly in the container
        alignItems: 'center', // Center items vertically
        marginTop: 10,
        marginLeft: 10,
      },
      
})