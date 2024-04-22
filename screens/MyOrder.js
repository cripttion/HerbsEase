import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import CheckBox from 'expo-checkbox';
const MyOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const trackOrder = () => {
    // Here you would implement the logic to fetch tracking info from your backend
    // For this example, we'll just set a static message
    setTrackingInfo({
      accepted: true,
      dispatched: true,
      delivered: false,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Order</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Order Number"
        onChangeText={setOrderNumber}
        value={orderNumber}
      />
      <Button title="Track Order" color={'#039551'} onPress={trackOrder} />
      {trackingInfo ? (
        <View>
          <CheckBox
            disabled
            value={trackingInfo.accepted}
            onValueChange={() => {}}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Order Accepted</Text>

          <CheckBox
            disabled
            value={trackingInfo.dispatched}
            onValueChange={() => {}}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Order Dispatched</Text>

          <CheckBox
            disabled
            value={trackingInfo.delivered}
            onValueChange={() => {}}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxLabel}>Order Delivered</Text>
        </View>
      ) : (
        <Text style={{fontWeight:'bold',marginTop:20,fontSize:20}}>No order yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginTop: 10,
  },
  checkboxLabel: {
    fontSize: 18,
    marginLeft: 10,
  },
});

export default MyOrder;
