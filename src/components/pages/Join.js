import { useState } from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import Login from "../widgets/Login"
import Register from "../widgets/Register"


const Join = ({goTo}) => {
    const [join, setJoin] = useState('login')
    const switchType = () => {
        if (join === 'login') {
            setJoin('register')
        }
        else{
            setJoin('login')
        }
    }
  return (
    <View style={styles.container}>
        {
            join === 'login'?(
                <Login goTo={goTo} switchType={switchType} />
            ):(
                <Register goTo={goTo} switchType={switchType} />
            )
        }
        {/* <Button onPress={() => switchType()} title="toggle" /> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Join