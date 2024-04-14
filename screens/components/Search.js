import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { debounce } from 'lodash';

const Search = () => {
  const [serachText, setSearchText] = useState("");
  const onChangeText = (text) => {
  setSearchText(text);
    };

  return (
    <View style={styles.search}>
   
        <Ionicons name="search-outline" size={24} color="gray" />
  
    
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={serachText}
          placeholder="Search"
        />
      
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
    search:{
        flexDirection:'row',
        gap:10,
        backgroundColor:"#fff",
        paddingHorizontal:10,
        marginHorizontal:10,
        borderRadius:20,
        alignItems:'center',
        overflow:"hidden",
        // widht:"100%",
        flex:1,
    }
});
