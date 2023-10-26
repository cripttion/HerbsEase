import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React ,{useState} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const HorizontalCard = (props) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.Main}>
      <Image source={{ uri: props.url }} style={{ width: 100, height: 120, marginLeft: 10 }} />
      <View style={styles.textPlant}>
        <Text style={styles.title}>{props.nameOfProduct}</Text>
        <Text style={styles.desc}>
         {props.desc.slice(0,80)}. {/* Display only the first 3 lines */}
         
        </Text>
        <TouchableOpacity style={{display:'flex',flexDirection:'row',marginLeft:50,marginTop:5}}>
            <Text style={{color:'blue',fontWeight:'bold'}}>ViewMore</Text>
        <Ionicons
            name="arrow-forward"
            size={22}
            color={'blue'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  Main: {
    width: 300,
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    gap: 30,
    borderRadius: 20,
    marginRight: 5,
  },
  textPlant: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {
    textAlign: 'justify',
  },
 
});
