import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { shadow } from "../../common/styles"


const Profile = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.imageContainer, styles.shadow]}>
            <Image style={[styles.image, styles.shadow]} source={require('../../assets/imgs/user.png')} />
        </View>
        <View style={styles.infoContainer}>
            <Text style={[styles.name]}>Alaa Moahmmed Abou ALhassan</Text>
            <Text style={styles.infoText}>096055755</Text>
            <Text style={styles.infoText}>Omdurman/Elthaora - 9</Text>
            <Text style={styles.infoText}>alaaaboualhassan@gmail.com</Text>
            <TouchableOpacity style={[styles.button, styles.shadow]}>
                <Text style={styles.buttonText}>تعديل البيانات</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer:{
        backgroundColor: '#ccb8df',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        marginTop: '-15%'
    },
    shadow,
    image:{
        backgroundColor: 'white',
        borderRadius: 130,
        width: 130,
        height: 130,
    },
    infoContainer:{
        backgroundColor: '#a68cbf',
        padding: 10,
        width: '85%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 65,
        marginTop: -60,
        paddingBottom: 20
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 5,
        width: '90%'
    },
    infoText:{
        fontSize: 15,
        textAlign: 'center',
        marginTop: 8,
        color: 'whitesmoke'
    },
    buttonText:{
        color: '#a68cbf',
        fontSize: 17,
        fontFamily: 'Cairo-Regular'
    },
    button:{
        width: '90%',
        backgroundColor: 'whitesmoke',
        padding: 10,
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 10
    }
})

export default Profile