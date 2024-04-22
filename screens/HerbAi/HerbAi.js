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
  Modal,
  Pressable,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import FileSelect from "../FileSelect";

const HerbAi = ({navigation}) => {
  const [query, setQuery] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [respon, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);

  const onChangeText = (text) => {
    setTextInput(text);
  };

  const onSendPress = async () => {
    setModalVisible(false);
    setLoading(true);
    let requestData = {};
  
    if (textInput) {

      requestData = { type: "text", data: textInput };
      setQuery([...query, requestData]);
      setTextInput("");
      try {
        const response = await axios.post(
          "https://herbease.onrender.com/ai/airesponse",
          {query:requestData.data},
         
        );
        if (response.status === 200) {
          setResponse([...respon, response.data]);
        }
      } catch (error) {
        Alert.alert("Sorry Unable to fetch the datails");
      }
    }
    else {
      
      const formData = new FormData();
      formData.append("images", {
        uri: image,
        type: "image/jpeg", // Adjust the image type if necessary
        name: "image.jpg",
      });
  
      requestData = { type: "image", data: formData };
      
      setQuery([...query,{type:'image',data:image}]);
      setImage(null);
      try {
        const response = await axios.post(
          "https://herbease.onrender.com/ai/generate-text",
          requestData.data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          setResponse([...respon, response.data]);
        }
      } catch (error) {
        Alert.alert("Sorry Unable to fetch the datails");
      }
    }
  //  console.log(requestData.data);
   
    setLoading(false);
  };

  const onCameraPress = () => {
    setModalVisible(true);
  };
// console.log(respon.suggestion.productId);
  return (
    <>
      {loading && <ActivityIndicator size="large" color="#039551" />}
      <ScrollView
        showsVerticalScrollIndicator={false}
        vertical
        style={styles.main}
      >
        {query &&
          query.map((d, index) => (
            <View key={index}>
              <View style={styles.query}>
                <Text style={styles.titleText}>You</Text>

                {d.type === "text" && (
                  <LinearGradient
                    colors={["#192f6a", "#039551"]}
                    style={styles.button}
                  >
                    <Text style={styles.text}>{d.data}</Text>
                  </LinearGradient>
                )}
                {d.type === "image" && (
                  <Image
                    source={{ uri: d.data }}
                    style={{ alignItems: "center", width: 200, height: 200, marginTop: 20 }}
                  />
                )}
              </View>

              <View style={styles.response}>
                <Text style={styles.titleText}>Fagu-AI</Text>
                <LinearGradient
                  colors={["#039551", "#192f6a"]}
                  style={styles.button}
                >
                  <Text style={styles.text}>{respon&&respon[index]?.text}</Text>

                </LinearGradient>
                {respon&&respon[index]?.suggestion!=null&&<>
                  <Pressable style={styles.suggestion} onPress={()=> navigation.navigate('SerachResults', { searchText:respon[index]?.suggestion.productId.name })}>
                    <Text style={{textAlign:'center'}}>Checkout Related product</Text>
                   
                   
                  </Pressable>
                </>}
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

        <TouchableOpacity style={styles.sendButton} onPress={onCameraPress}>
          <LinearGradient
            colors={["#192f6a", "#039551"]}
            style={styles.buttonsend}
          >
            <Ionicons name="camera-outline" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            onSendPress();
          }}
        >
          <LinearGradient
            colors={["#192f6a", "#039551"]}
            style={styles.buttonsend}
          >
            <Ionicons name="send-outline" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{ flexDirection: "row-reverse" }}
            >
              <Ionicons name="close-outline" size={28} color="black" />
            </Pressable>
            <View>
              <FileSelect setImage={(data) => setImage(data)} onsends={onSendPress}  />
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default HerbAi;

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    gap: 20,
    overflow: "scroll",
    maxHeight: "100vh",
  },
  query: {
    alignSelf: "flex-start",
    marginHorizontal: 10,
    maxWidth: "80%",
    marginVertical: 20,
  },
  response: {
    alignSelf: "flex-end",
    marginRight: 10,
    marginVertical: 20,
    maxWidth: "80%",
  },
  button: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderRadius: 10,
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
    marginBottom: 2,
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
  titleText: {
    marginVertical: 5,

    fontSize: 16,
    fontWeight: "bold",
    color: "#039551",
  },
  centeredView: {},
  modalView: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
    bottom: 50,
    left: 50,
    right: 50,
  },
  suggestion:{
    marginTop:15,
    backgroundColor:'white',
    elevation:5,
    borderRadius:40,
    padding:5,
    maxWidth:"auto",
  }
});
