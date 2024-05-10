import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native-web';
import Heading from '../components/heading';
import Footers from '../components/footer';
import { FaArrowDown, FaMicrophone, FaSchool } from 'react-icons/fa';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    const handleVoicePress = () => {
      navigation.navigate('VoiceScreen'); 
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
        <input style={styles.input} />
       <FaArrowDown style={{marginTop: 10}} size={30} />
        <Pressable onPress={handleVoicePress}>
        <FaMicrophone size={20} style={styles.microphone} />
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
    flexDirection: 'row',
    height: 50,
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
    padding: 20
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },

  containerHeading: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
  }
});
