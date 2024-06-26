import React, { useEffect, useState } from "react";
import {
  Alert,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import NetInfo from "@react-native-community/netinfo";

const CategorySection = ({navigation}) => {
  const [active, setActive] = useState("All");
  const [data, setData] = useState([]);
  const [networkType, setNetworkType] = useState(""); // To store the network type
  const [loading, setLoading] = useState(true);
  const [apiCalled, setApiCalled] = useState(false); // Track whether the API has been called

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetworkType(state.isConnected);
    });

    return () => {
      unsubscribe(); // Unsubscribe when component unmounts
    };
  }, []);

  useEffect(() => {
    if (networkType === false) {
      Alert.alert("No Data Connection", `Current network type: ${networkType}`);
    }
  }, [networkType]);

  useEffect(() => {
    if (!apiCalled && networkType) {
      fetchData();
      setApiCalled(true);
    }
  }, [networkType, apiCalled]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://herbease.onrender.com/product/getCategories"
      );
      if (response && response.data) {
        setData(response.data);
        setLoading(false);
      } else {
        Alert.alert("Unable to load the category.");
        setLoading(false);
      }
    } catch (error) {
      Alert.alert(
        "Error",
        "Unable to fetch data. Please check your internet connection."
      );
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#039551" />
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.category}
        >
          <TouchableOpacity  onPress={() => setActive('All')}>
                <LinearGradient
                  colors={
                    active === 'All'
                      ? ["#039551", "#039551"]
                      : ["#fff", "#fff"]
                  }
                  style={styles.button}
                >
                  <Text
                    style={[
                      styles.text,
                      { color: active === 'All' ? "#fff" : "#039551" },
                    ]}
                  >
                    All
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
          {data &&
            data.category.map((d,key) => (
              <TouchableOpacity key={key} onPress={() => { navigation.navigate('SerachResults', { searchText:d }),setActive(d)}}>
                <LinearGradient
                  colors={
                    active === d
                      ? ["#039551", "#039551"]
                      : ["#fff", "#fff"]
                  }
                  style={styles.button}
                >
                  <Text
                    style={[
                      styles.text,
                      { color: active === d ? "#fff" : "#039551" },
                    ]}
                  >
                    {d}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    color: "#fff",
  },
});

export default CategorySection;
