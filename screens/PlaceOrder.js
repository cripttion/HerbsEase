import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import RNUpiPayment from 'react-native-upi-payment';
import axios from 'axios';
import SucessModal from './components/SuccessModal';
import { useWishlist } from '../StateMangement/WhistlistManagement';
const PlaceOrder = ({route,navigation }) => {
  const {clearCart} = useWishlist();
    const{pdata,price} = route.params
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const DeliveryCharges = 60;
  let AmountToPay = price;
  AmountToPay = (price+DeliveryCharges).toString();

 
   const[model,setModal] = useState(false);
 
   const handleSaveAddress = () => {
    if(paymentOption==='')
    {
        return Alert.alert('Please select the Payment Option');
    }
    RNUpiPayment.initializePayment(
        {
          vpa: '8853732118@paytm', 
          payeeName: name,
          amount:AmountToPay,
          transactionRef: 'aasf-332-aoei-fn',
        },
        successCallback,
        failureCallback
      );
      async function successCallback(data) {
          const orderData = {
            products:data,
            name,
            address,
            phone,
            pincode:pin,
            paymentType:paymentOption,
            paymentId:data.txnId,

          }
          try{
            const response = await axios.post("https://herbease.onrender.com/product/trending",{orderData});
            if(response.status===201)
            {
                clearCart();
                setModal(true);
            }
          }catch(error)
          {
            Alert.alert("Something went wrong try again please!")
          }finally{
            setAddress('');
            setName('');
            setPaymentOption('');
            setPin('')
          }
      }
      
      function failureCallback(data) {
        
        Alert.alert("Payment failed , If money deducted from your account it will return in 3 working day. Contact support for more assist");
      }
    
  };

  return (
    <>
    <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
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
      <ScrollView vertical showsVerticalScrollIndicator={false} style={{marginVertical:10,marginHorizontal:10}}>
        <Text style={{fontWeight:'bold',fontSize:18}}>You have to Pay:</Text>
        {pdata.map((d,index)=>(
          <View key={index} style={{marginVertical:10}}>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:20}}>
                <Text>{d.name} X {d.quantity}</Text>
                <Text>₹ {d.price*d.quantity}</Text>
              </View>
          </View>
        ))}
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:20,marginVertical:10}}>
                <Text>Delivery charges </Text>
                <Text>₹ {60}</Text>
        </View>
        <View style={{height:1,backgroundColor:'gray',flexGrow:1,flexDirection:'row'}}></View>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:20,marginVertical:10}}>
                <Text>Total Amount </Text>
                <Text>₹ {AmountToPay}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleSaveAddress} >
        <Text style={styles.buttonText}>Proceed to payment</Text>
      </TouchableOpacity>


      <Text style={{textAlign:'center',fontSize:10,color:'gray',marginTop:50,marginHorizontal:50}}>⚠️ Note: please don't back while payment in progress , if any issue happend please contanct to support</Text>
      <Text style={{textAlign:'center',fontSize:10,color:'gray',marginTop:20}}>Thank you HerbEase</Text>
    </ScrollView>
    {model&&<SucessModal navigation={navigation} />}
    </>
  )
}

export default PlaceOrder

const styles = StyleSheet.create({
  scrollView: {
    flexGrow:1,
    marginHorizontal:10,
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
