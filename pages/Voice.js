import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground  } from 'react-native-web';
import Heading from '../components/heading';
import Footers from '../components/footer';
import { FaMicrophoneAlt, FaSchool } from 'react-icons/fa';
import { useNavigation } from '@react-navigation/native';
import { BiBorderRadius } from 'react-icons/bi';

export default function VoiceScreen() {

    const navigation = useNavigation();

    const handleCancelPress = () => {
      navigation.navigate('Home'); 
    };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Heading />

    <View style={styles.center}>
        <Text style={{fontSize: 15}}>My Home Location</Text>
        <View style={styles.container}>
       <View style={styles.containerHeading}>
        <FaSchool size={40} />
       <Text style={{fontSize: 15, marginLeft: 20}}>Cebu Roosevelt Memorial Colleges</Text>
       </View>

        <View style={styles.inputContainer}>
      <FaMicrophoneAlt style={{backgroundColor: 'red', borderRadius: '50%', padding: 10, color: "white"}} size={30} />
        <Text>Say Current Location</Text>
       <Pressable onPress={handleCancelPress}>
       <Text style={{color: "red"}}>Cancel</Text>
       </Pressable>
        </View>
        </View>

    </View>
    


      <Footers />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '80%',
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    paddingLeft: 10,
    marginTop: 10,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '90%',
    alignItems: 'center',
    marginTop: 10
  },    

  microphone: {
    position: 'absolute',
    right: 40,
    top: 16,
  },

  center: {
    width: '90%',
    height: '60%',
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 5
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
    borderRadius: 10,
  },

  containerHeading: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  }
});
