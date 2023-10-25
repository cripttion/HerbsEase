import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ProductCard = (props) => {
  return (
    <View style={styles.main}>
    <Image source={{ uri: props.url }} style={{ width: 100, height: 120, marginLeft: 10 }} />
    <View>
        <Text>{props.nameOfProduct}</Text>
    </View>

    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        
    }
})