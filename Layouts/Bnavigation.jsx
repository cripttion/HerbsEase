import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "../StateMangement/NavigationProvider";
import { useWhishList } from "../StateMangement/WhistlistManagement";
import { LinearGradient } from "expo-linear-gradient";

const Bnavigation = ({ navigation }) => {
  const { activePage, onPageChange } = useNavigation(); // Use the custom hook to access the context
  return (
    <View style={styles.NavMain}>
      <View style={styles.NavItems}>
        <TouchableOpacity
          style={styles.NavButton}
          onPress={() => {
            onPageChange("Home");
            navigation.navigate("Home");
          }}
        >
          <Ionicons
            name="home-outline"
            size={22}
            color={activePage === "Home" ? "#097945" : "black"}
          />
          {/* <Text style={styles.NavText}>Home</Text> */}
        </TouchableOpacity>
        <View style={styles.aisupport}>
          <TouchableOpacity
            style={styles.NavButton}
            onPress={() => {
              onPageChange("Home");
              navigation.navigate("AI");
            }}
          >
            <LinearGradient
              // Button Linear Gradient "#097945"
              colors={["#192f6a","#039551", ]}
              style={styles.button}
            >
              <Ionicons
                name="leaf-outline"
                size={22}
                color={"white"}
              />
            </LinearGradient>
            <Text style={styles.text}>AI Support</Text>

          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.NavButton}
          onPress={() => {
            onPageChange("Profile");

            navigation.navigate("Profile");
          }}
        >
          <Ionicons
            name="settings-outline"
            size={22}
            color={activePage === "Profile" ? "#097945" : "black"}
          />
          {/* <Text style={styles.NavText}>Profile</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  NavMain: {
    backgroundColor: "white",
    height: 60,
  },
  NavItems: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center", // Center items vertically
    paddingLeft: 10,
    paddingRight: 10,
  },
  NavText: {
    color: "black",
  },
  NavButton: {
    alignItems: "center", // Center items horizontally
  },
  cartStyle: {
    flexDirection: "row",
  },
  aisupport: {
    // borderWidth:1,
    // backgroundColor:'black',
    paddingTop:10,
   
   
    marginTop:-40
  },
  button: {
    borderRadius:50,
    alignItems: "center",
    padding:10,
  
  },
  text:{
    color:"black"
  }
});

export default Bnavigation;
