import { useState } from "react"
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { shadow } from "../../common/styles"


const CartProduct = ({data}) => {
    const [amount, setAmount] = useState(1)
    const changeAmount = (x) => {
        if (x === '+') {
            setAmount(amount + 1)
        }else{
            if(amount > 1){
                setAmount(amount - 1)
            }
        }
    }
  return (
    <View style={[styles.card, styles.shadow]}>
        <View style={[styles.imageContainer, styles.shadow]}>
            <Image style={styles.image} source={{uri: data.pic1}} />
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.name}> { data.name } </Text>
            <Text style={styles.price}> { data.price } </Text>
            <View style={styles.amountSetter}>
                <View style={styles.amountSection}>
                    <TouchableOpacity onPress={() => changeAmount('-')} style={[styles.amountButton, styles.shadow]}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.amountSection}>
                    <Text>{ amount }</Text>
                </View>
                <View style={styles.amountSection}>
                    <TouchableOpacity onPress={() => changeAmount('+')} style={[styles.amountButton, styles.shadow]}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.actionsContainer}>
            <TouchableOpacity style={[styles.actionButton, styles.shadow]}>
                <Image style={styles.actionIcon} source={require('../../assets/icons/heart.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.actionButton, styles.shadow]}>
                <Image style={styles.actionIcon} source={require('../../assets/icons/delete.png')} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: '#a68cbf',
        padding: 8,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 2
    },
    imageContainer:{
        backgroundColor: 'whitesmoke',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.5

    },
    image:{
        height: 80,
        width: 80
    },
    infoContainer:{
        flex: 2,
        padding: 10,
        alignItems: 'flex-end'
    },
    actionsContainer:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    actionButton:{
        width: 35,
        height: 35,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 50
    },
    actionIcon:{
        width: 20,
        height: 20
    },
    shadow,
    name:{
        color: 'whitesmoke',
        fontSize: 17,
        fontWeight: 'bold'
    },
    price:{
        color: 'gold',
        fontSize: 15,
        fontWeight: 'bold'
    },
    amountSetter:{
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10
    },
    amountButton:{
        width: 30,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 7,
        backgroundColor: '#a68cbf'
    },
    amountSection:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 40,
    },
    buttonText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default CartProduct