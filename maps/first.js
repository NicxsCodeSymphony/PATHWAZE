import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native-web';
import Heading from '../components/heading';
import Footers from '../components/footer';
import { FaArrowDown, FaMicrophone, FaSchool } from 'react-icons/fa';
import { useNavigation } from '@react-navigation/native';

export default function First() {

    const navigation = useNavigation();

    const handleVoicePress = () => {
      navigation.navigate('VoiceScreen'); 
    };
  return (
    <View style={styles.container}>
      <Heading />

      <View style={styles.heading}>
        <Text>Select Floor</Text>
        <select style={styles.select}>
          <option value="1">1st Floor</option>
          <option value="2">2nd Floor</option>
          <option value="3">3rd Floor</option>
          <option value="4">4th Floor</option>
          <option value="5">5th Floor</option>
        </select>
      </View>

      <View style={styles.map}>
        <View style={styles.image} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 100},
  heading: {paddingLeft: 20},
  select: {width: 120},
  map: {width: '100%', height: '95%', marginTop: 20,},
  image: { 
    flex: 1,
    resizeMode: 'cover',
    backgroundImage: "url('./assets/floor1.png')",
    backgroundRepeat: 'no-repeat',
  }
});
