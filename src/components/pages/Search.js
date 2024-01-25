import { useEffect, useState } from "react"
import { TextInput, View, StyleSheet, TouchableOpacity, Image, ToastAndroid } from "react-native"
import { shadow } from "../../common/styles"
import ProductsCards from "../widgets/ProductsCards"
import api from "../../api/api"

const Search = ({goTo}) => {
    const [name, setName] = useState('')
    const [items, setItems] = useState([])
    const [refresh, setRefresh] = useState(false)
    const getProducts = async() => {
        if(name!== ''){
            let data = await api.post('/product/search', {name: name})
            setItems(data.data.data)
            console.log(data.data.data)
        }
        else{
            ToastAndroid.show(' أدخل إسم المنتج أولاَ ', ToastAndroid.CENTER)
        }
    }
  return (
    <View>
        <View style={[styles.container, styles.shadow]}>
            <TouchableOpacity onPress={() => getProducts()} style={[styles.searchButton]}>
                <Image style={styles.searchIcon} source={require("../../assets/icons/search.png")} />
            </TouchableOpacity>
            <TextInput onChangeText={value => setName(value)} style={styles.input} placeholder="إسم المنتج ..." />
        </View>
        <View style={styles.cardsContainer}>
            <ProductsCards products={items} style={styles.cards} goTo={goTo} />
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: '#fffcfd',
        marginBottom: 10,
        borderRadius:30,
        paddingRight: 0,
        marginBottom: 25
    },
    shadow,
    input:{
        padding: 5,
        width: '80%',
        textAlign: 'right',
        fontSize: 17
    },
    searchButton:{
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ffdbe0',
        margin: 5,
        borderRadius: 30
    },
    searchIcon:{
        height: 20,
        width: 20,
        opacity: 0.3
    },
    cardsContainer:{
        height: 556
    }
})

export default Search