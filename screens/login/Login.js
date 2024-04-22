import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert,ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import loginsvg from "./../../assets/man-holding-plant-pot.png";
import { t } from 'react-native-tailwindcss';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useLoginList } from "../../StateMangement/LoginManager";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [optsend, setOtpSendStatus] = useState(false);
  const [Otp, setOtp] = useState("");
  const[optgeneration,setOtpgenerating] = useState(false);
   const{isLoggedIn,setIsLoggedIn} = useLoginList();
const[key,setkey]=useState(0);
  const handleLogin = async () => {
    setOtpgenerating(true);
    try {
      const response = await axios.get(`https://herbease.onrender.com/user/login/${email}`, {
       email:email
      });
      if(response.status===200)
      {
        setOtpSendStatus(true);
        setOtpgenerating(false);
      }
      else{
        Alert.alert(`No user Found with given ${email}`)
      }
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert('No user Found');
      } else {
        console.error('Error logging in:', error);
      }
    } finally {
      setOtpgenerating(false);
    }
  };
  const handleOtpVerification = async () => {
    try {
        const response = await axios.post(`https://herbease.onrender.com/user/checkotp`, {
            email: email,
            otp: Otp
        });
        if (response.status === 200) {
            const { token } = response.data;
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('Email',email);
            setIsLoggedIn(true);
            setOtpSendStatus(false);
            setkey(prev => prev + 1);
            navigation.navigate('Home');
            
        }

    } catch (error) {
        if (error.response && error.response.status === 401) {
            Alert.alert('Invalid Otp');
        } else {
            console.error('Error logging in:', error);
        }
    } finally {
        setOtp('')
    }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={tw`flex  items-center justify-center`}>
          <Image source={loginsvg} style={{ width: 400, height: 220 }} />
        </View>
        <View style={tw`flex-col mt-20`}>
          {!optsend?(<TextInput
            style={tw`border border-gray-300 p-3 mx-2 rounded-md`}
            placeholder="Email"
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={email}
          />):(
            <>
            <Text style={[t.mT2, t.textCenter, t.text2xl]}>
            Confirm Your OTP
          </Text>
          <Text style={{marginHorizontal:20,}}>
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
          </>
          )}
         
                <TouchableOpacity onPress={!optsend?handleLogin:handleOtpVerification}  >
            <View style={[t.mT5,t.bgGreen500,t.p2,t.flex,t.itemsCenter,t.justifyCenter,t.mL4,t.mR4,t.roundedBFull]}>

                    <Text style={t.textWhite}>{!optsend?<>
                        <View style={[t.flexRow]}>
                        <Text style={[t.textWhite,t.mR4]}>Generating OTP</Text>
                        {optgeneration&&<ActivityIndicator size={"small"} color={"white"} />}
                        </View>
                    </>:'Login'}</Text>
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
