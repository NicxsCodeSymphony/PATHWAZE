import { View, Text, StyleSheet } from "react-native-web"
import { Pressable } from "react-native-web"
import { useNavigation } from "@react-navigation/native"
import { FaVolumeUp, FaFire } from 'react-icons/fa'; 


export default function Heading(){

    const navigation = useNavigation()

    const goToVoiceScreen = () => {
        navigation.navigate('VoiceScreen')
    }

    return(
        <View style={styles.heading}>
          <div style={styles.container}>
          <FaFire style={{marginRight: 5}} size={20} />
            <Text style={styles.text}>PATHWAZE</Text>
          </div>
          
          <div style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <FaVolumeUp size={20} />
          </div>
        </View>
    )

}

const styles = StyleSheet.create({
    heading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
        borderStyle:'solid',
        backgroundColor: 'white'
    },

    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    text: {
        marginRight: 10
    },

    container: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

