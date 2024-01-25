import { Text, View, StyleSheet, Button, Touchable, Image } from "react-native"

const Header = () => {
  return (
    <View>
      <Text style={styles.lightHeader}>كوني الملكة </Text>
      <Text style={styles.boldHeader}>وإختاري بعناية!</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    lightHeader:{
        fontSize: 20,
        marginHorizontal: 25,
        marginTop: 10,
        color: '#e91e63',
        fontWeight: 'bold',
    },
    boldHeader:{
        fontSize: 30,
        marginHorizontal: 25,
        fontWeight: 'bold',
        color: '#444'
    },
})

export default Header