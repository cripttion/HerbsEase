import {ScrollView, View, Text,SafeAreaView,Image,StyleSheet,TouchableOpacity, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
const ProductDescription = ({route,navigation}) => {
  const { product } = route.params;
  const[value,setvalue] = useState(1);
  const [feedback, setFeedback] = useState('');
  const[feedbackArray,setFeedbackArray] = useState([]);
  const onChangeText = (text) => {
    // Update the state with the new text
    setFeedback(text);
  };
  const handleSend = (value)=>{
    setFeedbackArray([...feedbackArray, feedback]);

    // Clear the input field after adding feedback
    setFeedback('');
  }
  const handlePlus =() =>{
    setvalue(value+1);
  }
  const handleminus =()=>{
    
    setvalue((value-1)>0?value-1:1);
  }
  const handleBack=()=>{
    navigation.navigate('Home');
  }

  return (
<SafeAreaView style={styles.container}>
<View style={styles.backButton}>
  <TouchableOpacity onPress={handleBack}>  
<Ionicons
            name="arrow-back-outline"
            size={30}
            color='white'
          />
          </TouchableOpacity>
          <Text style={{fontSize:30,color:'white'}}>Herbs Ease</Text>
</View>
<ScrollView>
        <View style={styles.body}>
        <View style={styles.imageSection}>
        <Image source={{ uri:`data:image/jpeg;base64,${product.Images[0].imgdata}` }} style={styles.img} />
        
        </View>

        <View style={{marginTop:20,}}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>{product.NameOfProdut}
        </Text></View>
        <View style={{marginTop:20}}>
            <Text style={{fontSize:26}}> ₹ {product.Price}</Text>
        </View>
        <View style={{marginTop:20,padding:5,}}><Text style={{textAlign:'justify',}}>{product.Description}</Text></View>


        <View style={{marginTop:20}}>
            <Text >Give you feedback</Text>
            <AutoGrowingTextInput style={styles.textInput} placeholder={'Your Message'}       onChange={(e) => onChangeText(e.nativeEvent.text)} value={feedback} />
            <TouchableOpacity onPress={handleSend} style={{backgroundColor:'#649749',padding:10,borderRadius:50,maxWidth:80,alignItems:'center',marginTop:10}}>
            <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>Send</Text>
        </TouchableOpacity>
        <Text style={{fontSize:20,color:'black',marginTop:20,borderBottomWidth:1}}>Feedbacks</Text>
        {feedbackArray.map((v, index) => (
        <Text key={index}>{index+1}. {v}</Text>
      ))}
        </View>
        <View style={{width:'90%',marginTop:100}}>
        <Image source={{ uri:'https://static.mywebsites360.com/f006f98b1d2d4d35aecee42d01001f38/i/ac69b8e789e74aa7bb459cdf48ccaf1e/1/4SoifmQp45JMgBnHp7ed2/herbsinfo-700x525-5af480a58c572.jpg' }} style={styles.img2} />

        </View>
        </View>
     
        </ScrollView><View style={styles.base}> 
        <View style={styles.quantitly}>
        <TouchableOpacity  onPress={handleminus} style={{backgroundColor:'white',padding:10,borderRadius:50}}><Text style={{fontSize:20,fontWeight:'bold'}}>-</Text></TouchableOpacity>

        <Text style={{fontSize:20,color:'white'}}>{value}</Text>
        <TouchableOpacity  onPress={handlePlus} style={{backgroundColor:'white',padding:10,borderRadius:50}}><Text style={{fontSize:20,fontWeight:'bold'}}>+</Text></TouchableOpacity>

        </View>
        <View style={styles.totalPrice}><Text style={{color:'white',fontWeight:'bold'}}>Total Price: ₹ {product.Price * value}</Text></View>
        <TouchableOpacity style={{backgroundColor:'white',padding:10,borderRadius:50}}>
            <Text style={{fontSize:15,color:'#649749',fontWeight:'bold'}}>Buy Now</Text>
        </TouchableOpacity>
        </View>
        </SafeAreaView>
  )
}

export default ProductDescription
const styles = StyleSheet.create({
    container:{
        flex:1,

        backgroundColor:'#FAFAFA',
       
    },
    body:{
        marginTop:10,
        flex:1,
        padding:5
        
        
    },
    img:{
        width:'100%',
        height:300,
        borderBottomWidth:5,
        borderColor:'black',

    },
  
   backButton:{
   
     flexDirection:'row',
     alignItems:'center',
     gap:30,
     backgroundColor:'#649749'
   },
   base:{
    flexDirection:'row',
    backgroundColor:'#649749',
    padding:5,
    alignItems:'center',
    justifyContent:'space-between'


   },
   quantitly:{
    flexDirection:'row',
    gap:10,
    alignItems:'center',
   },
 textInput:{
    paddingBottom:40,
    paddingLeft:5,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:1,
    marginTop:5

 },
 img2:{
    width:380,
    height:300

 }
    


})