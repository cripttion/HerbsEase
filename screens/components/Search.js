import { StyleSheet, Text, TextInput, View, Keyboard } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { debounce } from 'lodash';

const Search = ({navigation}) => {
  const [searchText, setSearchText] = useState("");

  const onChangeText = (text) => {
    setSearchText(text);
  };

  const handleSearch = debounce(() => {
    // Perform search or navigate to another screen with search results
    if (searchText.trim() !== '') {
      navigation.navigate('SerachResults', { searchText });
      setSearchText('');
      Keyboard.dismiss(); // Dismiss the keyboard after navigation
    }
  }, 300); // Debounce the search to avoid triggering it on every keystroke

  return (
    <View style={styles.search}>
      <Ionicons name="search-outline" size={24} color="gray" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={searchText}
        placeholder="Search"
        onSubmitEditing={handleSearch} // Call handleSearch when Enter key is pressed
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    overflow: "hidden",
    flex: 1,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  }
});
