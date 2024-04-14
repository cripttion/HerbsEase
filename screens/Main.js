import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Bnavigation from '../Layouts/Bnavigation'

const Main = ({navigation,children}) => {
  return (
    <SafeAreaView style={styles.main}>
        <View style={styles.child}>

            {children}
        </View>
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
    }
})