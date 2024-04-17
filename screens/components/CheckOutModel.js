import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView,CheckBo } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import RNUpiPayment from 'react-native-upi-payment';
const CheckOutModel = ({ onAddressSave }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [paymentOption, setPaymentOption] = useState('UPI');

  const handleSaveAddress = () => {
    RNUpiPayment.initializePayment(
        {
          vpa: '7061454800@paytm', // or can be john@ybl or mobileNo@upi
          payeeName: 'John Doe',
          amount: '1',
          transactionRef: 'aasf-332-aoei-fn',
        },
        successCallback,
        failureCallback
      );
      function successCallback(data) {
        // do whatever with the data
        console.log(data);
      }
      
      function failureCallback(data) {
        // do whatever with the data
        console.log(data);
      }
    
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Text style={{fontWeight:'bold',fontSize:22}}>Delivery Address</Text>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Your Name' value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder='Address' value={address} onChangeText={setAddress} />
        <TextInput style={styles.input} placeholder='Phone' value={phone} onChangeText={setPhone} />
        <TextInput style={styles.input} placeholder='Pin - xxxxxx' value={pin} onChangeText={setPin} />
      </View>
      <Text style={{marginVertical:10,fontWeight:'bold',fontSize:18}}>Select Payment Option:</Text>
      <View style={styles.section}>
       
       <Checkbox
        
        style={styles.checkbox}
        value={paymentOption==='UPI' ? true : false}
        onValueChange={()=>setPaymentOption('UPI')}
        color={paymentOption==='UPI' ? '#039551' : undefined}
      />
      <Text style={{fontSize:18}}>UPI</Text>
    </View>
    <View style={styles.section}>
       
       <Checkbox
        style={styles.checkbox}
        disabled
        value={paymentOption==='debitcard' ? true : false}
        onValueChange={()=>setPaymentOption('debitcard')}
        color={paymentOption==='debitcard' ? '#039551' : undefined}
      />
      <Text style={{fontSize:18,color:'gray'}}>Debit Card (currently unavailable)</Text>
    </View>
      <View style={styles.section}>
       
         <Checkbox
          style={styles.checkbox}
          disabled
          value={paymentOption==='cod' ? true : false}
          onValueChange={()=>setPaymentOption('cod')}
          color={paymentOption==='cod' ? '#039551' : undefined}
        />
        <Text style={{fontSize:18,color:'gray'}}>Cash On Delivery (currently unavailable)</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSaveAddress}>
        <Text style={styles.buttonText}>Proceed to payment</Text>
      </TouchableOpacity>


      <Text style={{textAlign:'center',fontSize:10,color:'gray',marginTop:50,marginHorizontal:50}}>⚠️ Note please don't back while payment in progress , if any issue happend please contanct to support</Text>
      <Text style={{textAlign:'center',fontSize:10,color:'gray',marginTop:20}}>Thank you HerbEase</Text>
    </ScrollView>
  )
}

export default CheckOutModel

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    borderColor: "gray",
    
    marginBottom: 2,
    marginTop: 5,
    minHeight: 200,
    paddingTop: 20
  },
  input: {
    paddingVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    marginBottom: 10,
    paddingHorizontal:10,
    borderRadius:20,
  },
  button: {
    backgroundColor: '#039551',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:10,
    marginVertical:20,
  },
  checkbox:{
    borderRadius:50,
    padding:4,
    borderWidth:1,
    borderColor:'black',
  }
})
