import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import loginsvg from "./../../assets/man-holding-plant-pot.png";
import { t } from 'react-native-tailwindcss';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useLoginList } from "../../StateMangement/LoginManager";
const Login = ({ navigation }) => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
   const{isLoggedIn,setIsLoggedIn} = useLoginList();
const[key,setkey]=useState(0);
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.224.144:8000/login/user', {
        username: text,
        password: password,
      });
      const { token } = response.data;
      await AsyncStorage.setItem('token', token);
      setIsLoggedIn(true);
      setkey(prev=>prev+1);
      navigation.navigate('Home');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Alert.alert('Invalid Username or Password');
      } else {
        console.error('Error logging in:', error);
      }
    } finally {
      setText('');
      setPassword('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={tw`flex  items-center justify-center`}>
          <Image source={loginsvg} style={{ width: 400, height: 220 }} />
        </View>
        <View style={tw`flex-col mt-20`}>
          <TextInput
            style={tw`border border-gray-300 p-3 mx-2 rounded-md`}
            placeholder="Username/Email"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />
          <TextInput
            style={tw`border mt-2 border-gray-300 p-3 mx-2 rounded-md`}
            placeholder="password"
            onChangeText={(newText) => setPassword(newText)}
            defaultValue={password}
          />
                <TouchableOpacity onPress={handleLogin}  >
            <View style={[t.mT5,t.bgGreen500,t.p2,t.flex,t.itemsCenter,t.justifyCenter,t.mL4,t.mR4,t.roundedBFull]}>

                    <Text style={t.textWhite}>Login</Text>
            </View>
                </TouchableOpacity>
        </View>
        <View style={[t.itemsCenter,t.mT10]}>
            <TouchableOpacity onPress={()=> navigation.navigate('Register')
}>
                <Text style={[t.textBlue300]} >Register | SignUp</Text>
            </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:30,
    backgroundColor: "#FAFAFA",
  },
  body: {
    flex: 1,
    marginTop: "10px",
    // alignItems:"center",
    justifyContent:"center"
  },
});
