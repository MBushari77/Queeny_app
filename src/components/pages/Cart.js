import { useEffect, useState } from "react"
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import api from "../../api/api"
import CartProduct from "../widgets/CartProduct"
import { shadow } from "../../common/styles"

const Cart = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false)
    const getProducts = async() => {
        let data = await api.get('/product')
        setProducts(data.data.data)
    }
    useEffect(() => {
        getProducts()
        setRefresh(true)
    }, [refresh])
  return (
    <View>
        <View style={styles.header}>
            <Text style={styles.title}>سلة المشتريات</Text>
        </View>
        <View style={styles.cardsContainer}>
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) =>(
                    <CartProduct data={item} />
                )}
            />
        </View>
        <View style={styles.actions}>
            <TouchableOpacity style={[styles.actionButton, styles.removeButton, styles.shadow]}>
                <Text style={styles.actiontext}>تفريغ السلة</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionButton, styles.shadow]}>
                <Text style={styles.actiontext}>إكمال المعاملة</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: '5%',
        marginTop: '1%',
        width: '100%',
        textAlign: 'center'
    },
    cardsContainer:{
    },
    list:{
        height: '70%',
        paddingBottom: 10
    },
    actions:{
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    actionButton:{
        width: '90%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        backgroundColor: '#a68cbf',
        margin: 5,
        marginTop: 8,
        height: '70%',
        borderRadius: 30
    },
    removeButton:{
        backgroundColor: '#ff1959',
    },
    actiontext:{
        fontSize: 17,
        color: 'white'
    },
    shadow,
})

export default Cart