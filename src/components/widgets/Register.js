import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { shadow } from "../../common/styles"

const Register = ({switchType, goTo}) => {
  return (
    <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require('../../assets/icons/logo.png')} />

        <View style={[styles.container, styles.shadow]}>
            <TextInput style={styles.input} placeholder="الإسم ..." />
            <View style={[styles.iconSection]}>
                <Image style={styles.icon} source={require("../../assets/icons/phone.png")} />
            </View>
        </View>

        <View style={[styles.container, styles.shadow]}>
            <TextInput style={styles.input} placeholder="رقم الهاتف" />
            <View style={[styles.iconSection]}>
                <Image style={styles.icon} source={require("../../assets/icons/lock.png")} />
            </View>
        </View>

        <View style={[styles.container, styles.shadow]}>
            <TextInput style={styles.input} placeholder="العنوان" />
            <View style={[styles.iconSection]}>
                <Image style={styles.icon} source={require("../../assets/icons/location.png")} />
            </View>
        </View>

        <TouchableOpacity onPress={() => goTo({page: 'home'})} style={[styles.joinButton, styles.shadow]}>
            <Text style={styles.joinText}>التالي</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchType()} style={[styles.joinButton2, styles.shadow]}>
            <Text style={styles.joinText}>لدي حساب</Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    shadow,
    container:{
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: '#fffcfd',
        marginBottom: 5,
        borderRadius:30,
        paddingRight: 0,
    },
    iconSection:{
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ffdbe0',
        margin: 5,
        borderRadius: 30
    },
    icon:{
        height: 20,
        width: 20,
        opacity: 0.3
    },
    input:{
        padding: 5,
        width: '80%',
        textAlign: 'right',
        fontSize: 17,
    },
    loginContainer:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    joinButton:{
        marginTop: 15,
        backgroundColor: 'orange',
        marginBottom: 10,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 307
    },
    joinButton2:{
        marginTop: 5,
        backgroundColor: '#77608e',
        marginBottom: 10,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 307
    },
    joinText:{
        width: 200,
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        lineHeight: 35,
        margin: 6,
        fontWeight: 'bold'
    },
    logo:{
        width: 200,
        height: 50,
        marginBottom: 20
    }
})


export default Register