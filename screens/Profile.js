import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState ,useEffect} from "react";
import Main from "./Main";
import Ionicons from "@expo/vector-icons/Ionicons";
import ComplaintForm from "./components/ComplaintForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLoginList } from "../StateMangement/LoginManager";
const Profile = ({ navigation }) => {
  const { isLoggedIn, setIsLoggedIn } = useLoginList();

  const [iscomplainModalVisible, setIsComplainModalVisible] = useState(false);
  const [isaboutModalVisible, setIsAboutModalVisible] = useState(false);
  const openModal = () => {
    setIsComplainModalVisible(true);
  };

  const closeModal = () => {
    setIsComplainModalVisible(false);
  };

  const[email,setEmail] = useState('');
  useEffect(() => {
    const getData = async () => {
      let data = await AsyncStorage.getItem("Email");
     
      setEmail(data);
    };
    getData();
  }, []);
const handleLogout = async()=>{
   await AsyncStorage.removeItem('token');
   setIsLoggedIn(!isLoggedIn);
   navigation.navigate('Login');
   
}
  return (
    <Main navigation={navigation}>
      <ScrollView style={{ marginHorizontal: 10 }}>
        <Pressable style={styles.logout} onPress={handleLogout}>
        <Ionicons name="log-out" size={20} color={"black"} />
        <Text>Logout</Text>
        </Pressable>
        <View style={styles.user}>
          <View style={styles.profilImage}>
            <Ionicons name="person-outline" size={50} color={"white"} />
          </View>
          <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
          {email}
          </Text>
          <Pressable style={{ marginTop: 5 }}>
            <Text style={{ color: "blue", fontSize: 12 }}>
              Change Email/Phone
            </Text>
          </Pressable>
        </View>
        {/* <View style={styles.line}></View> */}
        <TouchableOpacity
          style={[styles.options, { marginTop: 40 }]}
          onPress={() => navigation.navigate("MyOrder")}
        >
          <Ionicons
            name="cube"
            size={20}
            color={"white"}
            style={{ backgroundColor: "#039551", padding: 5, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Your Orders</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.options}>
          <Ionicons
            name="headset"
            size={20}
            color={"white"}
            style={{ backgroundColor: "#039551", padding: 5, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Support</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.options} onPress={openModal}>
          <Ionicons
            name="megaphone"
            size={20}
            color={"white"}
            style={{ backgroundColor: "#039551", padding: 5, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Rise Complaint</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.options}>
          <Ionicons
            name="leaf"
            size={20}
            color={"white"}
            style={{ backgroundColor: "#039551", padding: 5, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Be a seller</Text>
        </TouchableOpacity>

        <View style={styles.line}></View>

        <TouchableOpacity
          style={styles.options}
          onPress={() => setIsAboutModalVisible(true)}
        >
          <Ionicons
            name="information-circle-outline"
            size={20}
            color={"white"}
            style={{ backgroundColor: "#039551", padding: 5, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 20 }}>About HerbsEase</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>

        <TouchableOpacity style={styles.options}>
          <Ionicons
            name="cafe"
            size={20}
            color={"white"}
            style={{ backgroundColor: "#039551", padding: 5, borderRadius: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Support Us</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 100 }}>
          <Text style={{ textAlign: "center" }}>
            © Project Initiative by Cripttion & Tanu
          </Text>
        </View>
      </ScrollView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={iscomplainModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIsComplainModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setIsComplainModalVisible(false)}
              style={{ flexDirection: "row-reverse" }}
            >
              <Ionicons name="close-outline" size={28} color="black" />
            </Pressable>
            <View>
              <ComplaintForm onClose={closeModal} />
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isaboutModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setIsAboutModalVisible(false);
          }}
        >
          <View style={styles.modalView}>
            <Pressable
              onPress={() => setIsAboutModalVisible(false)}
              style={{ flexDirection: "row-reverse" }}
            >
              <Ionicons name="close-outline" size={28} color="black" />
            </Pressable>
            <View>
              <Text style={{ textAlign: "justify" }}>
                Welcome to HerbsEase, your one-stop destination for all-natural
                herbal products tailored to your needs. We believe in the power
                of nature to heal and enhance well-being, and our mission is to
                provide you with the highest quality herbal remedies and
                supplements. At HerbsEase, we understand that everyone's
                wellness journey is unique. That's why we offer a diverse range
                of herbal products, carefully curated to address a variety of
                health concerns. Whether you're looking for immunity boosters,
                stress relievers, skincare solutions, or simply seeking to
                improve your overall health, we have something for you. Our
                products are sourced from trusted suppliers who prioritize
                quality and sustainability. We are committed to providing you
                with products that are free from harmful chemicals and
                additives, ensuring that you receive only the best nature has to
                offer. We are more than just a marketplace for herbal products;
                we are a community dedicated to holistic wellness. Our team of
                experts is here to guide you on your journey to better health,
                providing you with valuable information and support every step
                of the way. Join us at HerbsEase and experience the natural way
                to wellness. Let nature's bounty nourish and rejuvenate your
                mind, body, and soul.
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 20,
                }}
              >
                <Ionicons
                  name="logo-instagram"
                  size={20}
                  color={"white"}
                  style={{
                    backgroundColor: "#039551",
                    padding: 5,
                    borderRadius: 50,
                  }}
                />
                <Ionicons
                  name="logo-youtube"
                  size={20}
                  color={"white"}
                  style={{
                    backgroundColor: "#039551",
                    padding: 5,
                    borderRadius: 50,
                  }}
                />
                <Ionicons
                  name="logo-twitter"
                  size={20}
                  color={"white"}
                  style={{
                    backgroundColor: "#039551",
                    padding: 5,
                    borderRadius: 50,
                  }}
                />
                <Ionicons
                  name="logo-facebook"
                  size={20}
                  color={"white"}
                  style={{
                    backgroundColor: "#039551",
                    padding: 5,
                    borderRadius: 50,
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Main>
  );
};

export default Profile;

const styles = StyleSheet.create({
  user: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#a6e0c5",
    padding: 5,
    borderRadius: 20,
  },
  profilImage: {
    flexDirection: "row",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    borderBottomWidth: 1,
    borderRadius: 10,
    borderBottomColor: "gray",
    height: 2,
    // backgroundColor:'black',
    marginVertical: 10,
  },
  options: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    alignItems: "center",
  },

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
    top: "40%",
    bottom: 0,
    left: 0,
    right: 0,
  },
  logout:{
    position:'absolute',
    top:20,
    right:10, 
    zIndex:20,
    flexDirection:'row',
    gap:5,
  }
});
