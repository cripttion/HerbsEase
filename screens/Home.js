import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import HorizontalCard from '../components/HorizontalCard'
import CategoryButton from '../components/CategoryButton'
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductCard from '../components/ProductCard'
import { useWhishList } from '../StateMangement/WhistlistManagement'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { openDatabase } from 'react-native-sqlite-storage';
const Home = ({navigation}) => {
   const[data,setData] = useState([]);
   const { wishlist, setWishlist ,cartList,setCartList} = useWhishList();
   
  
   useEffect(() => {
    // Fetch data from your endpoint
    fetch('https://lazy-jade-fawn-wrap.cyclic.app/getAllProducts')
      .then((response) => response.json())
      .then((responseData) => {
        // Update the data state with the fetched data
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleAddToWishlist = (product) => {
    // Add or remove the product from the wishlist
    const updatedWishlist = wishlist.includes(product)
      ? wishlist.filter((item) => item !== product)
      : [...wishlist, product];
    setWishlist(updatedWishlist);
  };
  
  const handleAddToCart =(product)=>{
    const updatedCart = [...cartList, product];
    setCartList(updatedCart);
  }
    const[searchInput,setSearchInput] = useState("");
    function handleTextChange(e) {
        setSearchInput(e);
    }
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.body}>
        
    <ScrollView horizontal style={styles.scrollBar}>
  {data.slice(0, 4).map((product, index) => (
    <HorizontalCard
      key={index}
      url={`data:image/jpeg;base64,${product.Images[0].imgdata}`}
      nameOfProduct={product.NameOfProdut}
      desc={product.Description}
    />
  ))}
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
                <TouchableOpacity style={{padding:10, backgroundColor:'#649749',borderRadius:20,}}><Text style={{color:'white'}}>Serach</Text></TouchableOpacity>
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
            color='#649749'
          />

        </View>
       {/* Trending product cards  */}
       <ScrollView style={{ marginTop: 10 }}>
  <View style={styles.CardWrap}>
    {data.map((product, index) => (
      
      <ProductCard 
        key={index}
        url={`data:image/jpeg;base64,${product.Images[0].imgdata}`}        nameOfProduct={product.NameOfProdut}
        price={product.Price}
        onAddToWishlist={() => handleAddToWishlist(product)}
        onAddToCart ={()=>handleAddToCart(product)}
        />
    ))}
  </View>
</ScrollView>

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
      backgroundColor:'#FAFAFA',
     
     
    
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
        borderColor: '#649749',
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
      CardWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginHorizontal: 10,
      },
      
})