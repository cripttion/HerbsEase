import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal ,Text} from 'react-native';

const ComplaintForm = ({ onClose }) => {
  const [orderId, setOrderId] = useState('');
  const [issueDetails, setIssueDetails] = useState('');

  const submitComplaint = () => {
    // Logic to submit complaint

    // Reset form
    setOrderId('');
    setIssueDetails('');
    onClose(); // Close the modal
  };

  return (

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Order ID"
          value={orderId}
          onChangeText={setOrderId}
        />
        <TextInput
          style={styles.input}
          placeholder="Issue Details"
          multiline
          numberOfLines={4}
          value={issueDetails}
          onChangeText={setIssueDetails}
        />
        <Button title="Submit Complaint" color={'#039551'}  onPress={submitComplaint} />
        <View style={{marginTop:40,justifyContent:'center',alignItems:'center'}}>
            <Text>OR</Text>
        
            <Text>Contact us on :- +91 7061454800</Text>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
   
    // Push the modal to the bottom of the screen
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default ComplaintForm;
