import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { shadow } from "../../common/styles"
const Controler = ({goTo}) => {
    const [selected, setSelected] = useState('home')
    const setPage = (selectedPage) => {
        setSelected(selectedPage)
        // redircting to the selected page
        goTo({page: selectedPage, id: 0})
    }
  return (
    <View style={styles.container}>
        <View style={[styles.buttonsContainer, styles.shadow]}>

            <TouchableOpacity style={[styles.button, selected === 'search'? [styles.active, styles.shadow] :null]} onPress={() => setPage('search')}>
                <Image style={styles.icon} source={selected === 'search'? require('../../assets/icons/searchw.png'): require('../../assets/icons/search.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, selected === 'cart'? [styles.active, styles.shadow] :null]} onPress={() => setPage('cart')}>
                <Image style={styles.icon} source={selected === 'cart'? require('../../assets/icons/cartw.png'): require('../../assets/icons/cart.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, selected === 'home'? [styles.active, styles.shadow] :null]} onPress={() => setPage('home')}>
                <Image style={styles.icon} source={selected === 'home'? require('../../assets/icons/homew.png'): require('../../assets/icons/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, selected === 'liked'? [styles.active, styles.shadow] :null]} onPress={() => setPage('liked')}>
                <Image style={styles.icon} source={selected === 'liked'? require('../../assets/icons/heartw.png'): require('../../assets/icons/heart.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, selected === 'profile'? [styles.active, styles.shadow] :null]} onPress={() => setPage('profile')}>
                <Image style={styles.icon} source={selected === 'profile'? require('../../assets/icons/userw.png'): require('../../assets/icons/user.png')} />
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f1dcf6',
        height: '10%',
        position: 'absolute',
        flex: 1,
        bottom: 0,
        right: 0,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10
    },
    buttonsContainer:{
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 50,
        flexDirection: 'row'
    },
    shadow,
    button:{
        margin: 2,
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 50,
        padding: 5
    },
    icon:{
        width: 25,
        height: 25,
    },
    active:{
        backgroundColor: '#a68cbf'
    }
})

export default Controler