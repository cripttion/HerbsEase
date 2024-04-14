import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";

const HerbAi = () => {
  const [query, setQuery] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [respon, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeText = (text) => {
    setTextInput(text);
  };

  const onSendPress = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery([...query, textInput]);
    setTextInput("");
    try {
      const response = await axios.post(
        "http://192.168.224.144:8000/v1/p/airesponse",
        {
          query: textInput,
        }
      );
      if (response.status === 200) {
        setResponse([...respon, response.data]);
      }
    } catch (error) {
      Alert.alert("Sorry Unable to fetch the datails");
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <ActivityIndicator size="large" color="#039551" />}
      <ScrollView showsVerticalScrollIndicator={false} vertical style={styles.main}>
        {query &&
          query.map((data, index) => (
            <View key={index}>
              <View  style={styles.query}>
              <Text style={styles.titleText}>You</Text>

                <LinearGradient
                  colors={["#192f6a", "#039551"]}
                  style={styles.button}
                >
                  <Text style={styles.text}>{query[index]}</Text>
                </LinearGradient>
              </View>

              <View style={styles.response}>
                <Text style={styles.titleText}>Fagu-AI</Text>
                <LinearGradient
                  colors={["#039551","#192f6a" ]}
                  style={styles.button}
                >
                  <Text style={styles.text}>{respon[index]}</Text>
                </LinearGradient>
              </View>
            </View>
          ))}
 </ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={textInput}
          placeholder="Write your problem description"
        />
        <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
          <LinearGradient
            colors={["#192f6a", "#039551"]}
            style={styles.buttonsend}
          >
            <Ionicons name="send-outline" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HerbAi;

const styles = StyleSheet.create({
  main: {
   
    flexDirection:'column',
    gap: 20,
    overflow:'scroll',
    maxHeight:"100vh"
    
  },
  query: {

    alignSelf: "flex-start",
    marginHorizontal: 10,
    maxWidth:"80%",
    marginVertical:20,

  },
  response: {
    
    alignSelf: "flex-end",
    marginRight: 10,
    marginVertical:20,
    maxWidth:"80%",
   
  },
  button: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderRadius:10
  },
  text: {
    color: "#fff",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    
  },
  sendButton: {
    marginLeft: 10,
  },
  buttonsend: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  titleText:{
    marginVertical:5,
   

    fontSize:16,
    fontWeight:'bold',
    color:'#039551'
  }
});
