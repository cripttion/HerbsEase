import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Main from './Main'
import Search from './components/Search'
import Filter from './components/Filter'
import CategorySection from './components/CategorySection'
import HorizontalCard from './components/HorizontalCard'
import VerticalCard from './components/VerticalCard'
import axios from 'axios'
import ShadowLoader from './components/ShadowLoader'
const Home = ({navigation}) => {
  const [trending, setTrending] = useState([]);
  const [valuable, setValuable] = useState([]);
  const [topProduct, setTopProduct] = useState();
  const [mergedArray, setMergedArray] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response1 = await axios.get('https://herbease.onrender.com/product/trending');
        const response2 = await axios.get('https://herbease.onrender.com/product/top-products');
        if (response1.status === 200 && response2.status === 200) {
          setTrending(response1.data);
          setTopProduct(response2.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const topProductsByCount = topProduct?.topProductsByCount || [];
    const topProductsByPrice = topProduct?.topProductsByPrice || [];
    const topProductValue = [...topProductsByCount, ...topProductsByPrice];
    setMergedArray(topProductValue);
  }, [topProduct]);


  return (
    <Main navigation={navigation}>
      {loading?(<>
      <ShadowLoader />
      </>):(
            <View>
            <View style={styles.section1}>
              <Search navigation={navigation}/>
              <Filter navigation={navigation} />
            </View>
            <View>
              <CategorySection navigation={navigation} />
            </View>
       
             <ScrollView  style={styles.category} horizontal showsHorizontalScrollIndicator={false} >
                    {trending.map((data,index)=>(
                      <View key={index}>                  
                     
                      <VerticalCard navigation={navigation} data={data.productId} />
                      </View>
    
                    ))}
                 
                      
             </ScrollView>
           <View>
              <View style={{marginVertical:15,marginHorizontal:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Most Valuable For You</Text>
                <TouchableOpacity>
                  <Text style={{color:"#039551",fontSize:14}}>View All</Text>
                </TouchableOpacity>
              </View>
           </View>
         
           <ScrollView  vertical showsVerticalScrollIndicator={false}>
            {mergedArray.map((data, index) => (
              <View key={index}>
                <HorizontalCard navigation={navigation} data={data} />
              </View>
            ))}
          </ScrollView>
    
          </View>
      )}
      
    </Main>
  )
}

export default Home

const styles = StyleSheet.create({
  section1:{
    flexDirection:'row',
    // gap:10,
    marginVertical:5,

  },
 
  doyouknow:{
    fontSize:16,
    fontWeight:'bold'
  },
  category: {
    flexDirection:'row',
    gap:10,
    marginHorizontal:10,

  },

})