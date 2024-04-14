import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import loginsvg from "./../../assets/man-holding-plant-pot.png";
import verifyOTP from "./../../assets/verfiyOTP.png";
import { t } from "react-native-tailwindcss";
import tw from "tailwind-react-native-classnames";
import axios from "axios";
const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [Otp, setOtp] = useState("");
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleRegister = async () => {
    try {
      setLoadingRegister(true);
      const response = await axios.post(
        "http://192.168.224.144:8000/v1/generate-otp",
        {
          Email: email,
        }
      );
      if (response.status === 200) setClicked(!clicked);
    } catch (error) {
      console.log("Error:", error); // Log the error object
    } finally {
      setLoadingRegister(false);
    }
  };

  const handleVerify = async () => {
    try {
      setLoadingVerify(true);
      const response = await axios.post(
        "http://192.168.224.144:8000/v1/create-user",
        {
          Name: name,
          Email: email,
          Password: password,
          Phone: phone,
          Address: address,
          OTP: Otp,
        }
      );
      if (response.status === 201) {
        navigation.navigate("Login");
      } else {
        console.log(response);
        Alert.alert("Unable to register.");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoadingVerify(false);
    }
  };

  return (
    <SafeAreaView style={[t.flex1]}>
      <View style={[t.flex1, t.justifyCenter]}>
     
            {!clicked ? (
              <>
                <View style={tw`flex  items-center justify-center`}>
                  <Image
                    source={loginsvg}
                    style={{ width: 400, height: 220 }}
                  />
                </View>
                <View style={[t.mT20, t.flexCol]}>
                  <TextInput
                    style={tw`border mt-2 border-gray-300 p-3 mx-2 rounded-md`}
                    placeholder="Name"
                    onChangeText={(newText) => setName(newText)}
                    defaultValue={name}
                  />
                  <TextInput
                    style={tw`border mt-2 border-gray-300 p-3 mx-2 rounded-md`}
                    placeholder="Email"
                    onChangeText={(newText) => setEmail(newText)}
                    defaultValue={email}
                  />
                  <TextInput
                    style={tw`border mt-2 border-gray-300 p-3 mx-2 rounded-md`}
                    placeholder="Phone"
                    onChangeText={(newText) => setPhone(newText)}
                    defaultValue={phone}
                  />
                  <TextInput
                    style={tw`border mt-2 border-gray-300 p-3 mx-2 rounded-md`}
                    placeholder="Password"
                    onChangeText={(newText) => setPassword(newText)}
                    defaultValue={password}
                  />
                  <TextInput
                    style={tw`border mt-2 border-gray-300 p-3 mx-2 rounded-md`}
                    placeholder="Address"
                    onChangeText={(newText) => setAddress(newText)}
                    defaultValue={address}
                  />
                  <TouchableOpacity onPress={handleRegister}>
                    <View
                      style={[
                        t.mT5,
                        t.bgGreen500,
                        t.p2,
                        t.flex,
                        t.itemsCenter,
                        t.justifyCenter,
                        t.mL4,
                        t.mR4,
                        t.roundedBFull,
                      ]}
                    >
                      {!loadingRegister?<Text style={t.textWhite}>Register</Text>:<View style={[t.flexRow]}>
                        <Text style={[t.textWhite,t.mR4]}>Generating OTP</Text>
                        <ActivityIndicator size={"small"} color={"white"} />
                        </View>}
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                    <Text style={[t.textCenter,t.mT10]}>Login</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View style={[t.flex, t.justifyCenter, t.mX4]}>
                  <View style={tw`flex  items-center justify-center`}>
                    <Image
                      source={verifyOTP}
                      style={{ width: 400, height: 200 }}
                    />
                  </View>
                  <Text style={[t.mT2, t.textCenter, t.text2xl]}>
                    Confirm Your OTP
                  </Text>
                  <Text style={[t.mT2, t.textSm]}>
                    OTP sent successfully on -{" "}
                    <Text style={[t.textGreen500]}>{email}</Text>
                  </Text>
                  <TextInput
                    style={[
                        tw`border mt-5 border-gray-300 p-3 mx-2 rounded-md text-center`,
                        { letterSpacing:10 } // Custom styles
                      ]}
                
                    placeholder="OTP"
                    onChangeText={(newText) => setOtp(newText)}
                    defaultValue={Otp}
                  />

                  <TouchableOpacity onPress={handleVerify}>
                    <View
                      style={[
                        t.mT5,
                        t.bgGreen500,
                        t.p2,
                        t.flex,
                        t.itemsCenter,
                        t.justifyCenter,
                        t.mL4,
                        t.mR4,
                        t.roundedBFull,
                      ]}
                    >
                      {!loadingVerify?<Text style={t.textWhite}>verify</Text>:<ActivityIndicator size={"small"} color={"white"} />}
                    </View>
                  </TouchableOpacity>
                </View>
              </>
            )}
         
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
