import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    Easing,
    withRepeat,
   
   withTiming,
  } from 'react-native-reanimated';
  

  const ShadowLoader = () => {
  
    const opacity = useSharedValue(0.5);
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        
        opacity: opacity.value,
      };
    });
  
    React.useEffect(() => {
     
      opacity.value = opacity.value = withRepeat(
        withTiming(0.2, { duration: 2000 }),
        -1,
        true
      );
    }, [ opacity]);
  return (
    <>
      <View style={{ flexDirection: "row" }}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Animated.View style={[styles.box, animatedStyle]} />
      </View>
     
      <Animated.View style={[styles.secondBox, animatedStyle]} />
      <Animated.View style={[styles.secondBox, animatedStyle]} />
      <Animated.View style={[styles.secondBox, animatedStyle]} />
      <Animated.View style={[styles.secondBox, animatedStyle]} />
      
    
    </>
  );
};

export default ShadowLoader;

const styles = StyleSheet.create({
  box: {
    width: 200,
    height: 250,
    marginHorizontal: 10,
    backgroundColor: "gray",
    borderRadius: 20,
    marginVertical:10,
    opacity:0.3
  },
  secondBox: {

    backgroundColor: "gray",
    height: 200,
    marginHorizontal: 10,
    marginVertical:10,
    borderRadius: 20,
    opacity:0.5
  },
});
