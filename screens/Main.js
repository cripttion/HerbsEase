import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bnavigation from '../Layouts/Bnavigation'


const Main = ({navigation,children}) => {
  return (
    <SafeAreaView style={styles.main}>
       
        <ScrollView vertical showsVerticalScrollIndicator={false} style={styles.child}>

            {children}
        </ScrollView>
        <View style={styles.nav}>


      <Bnavigation navigation={navigation}/>
        </View>
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({
    main:{
      flex:1,
  
     justifyContent:"space-between"
    },
   
    
})