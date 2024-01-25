import { useState, useEffect } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import api from "../../api/api"
import LikedProductCard from "../widgets/LikedProductCard"


const Liked = () => {
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
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>قائمة إعجاباتي</Text>
        </View>
        <View style={styles.acroller}>
        <FlatList
            style={styles.list}
            data={products}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>(
                <LikedProductCard data={item} />
            )}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        height: '10%',
        width: '100%',
        padding: 10,
        alignItems: 'center'
    },
    acroller:{
        height: '90%',
        width: '100%',
        padding: 10
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    list:{
        width: '100%'
    }
})

export default Liked