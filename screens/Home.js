import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bnavigation from '../Layouts/Bnavigation'
import Main from './Main'
import Search from './components/Search'
import Filter from './components/Filter'
import CategorySection from './components/CategorySection'

const Home = ({navigation}) => {
  return (
    <Main navigation={navigation}>
      <View>
        <View style={styles.section1}>
          <Search />
          <Filter />
        </View>
        <View>
          <CategorySection />
        </View>
      </View>
    </Main>
  )
}

export default Home

const styles = StyleSheet.create({
  section1:{
    flexDirection:'row',
    // gap:10,
    marginVertical:5,

   
   
  }
})