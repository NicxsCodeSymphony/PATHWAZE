import { StyleSheet, View, Text } from 'react-native-web';
import { FaFire, FaFirstAid, FaSignOutAlt } from 'react-icons/fa'; // Importing icons from react-icons library

export default function Footers() {
  return (
    <View style={styles.footer}>
      <View style={[styles.iconContainer, styles.division]}>
        <FaFire size={20} />
        <Text style={styles.text}>Fire Extinguisher</Text>
      </View>

      <View style={[styles.iconContainer, styles.division]}>
        <FaFirstAid size={20} />
        <Text style={styles.text}>First Aid</Text>
      </View>

      <View style={[styles.iconContainer, styles.division]}>
        <FaSignOutAlt size={20} />
        <Text style={styles.text}>Fire Exit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    marginTop: 5,
  },

  division: {
    height: '100%',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  }
});
