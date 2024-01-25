
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Button, Image } from "react-native"
import { shadow } from "../../common/styles"

const ProductsCards = ({products, goTo}) => {

  return (
      <View>
        <FlatList
            style={styles.container}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            data={products}
            renderItem={({item}) => (
                <View style={[styles.card, styles.shadow]}>
                    <TouchableOpacity onPress={() => goTo({page: 'details', id: item.id})} style={styles.center}>
                        <Image style={styles.cardPic} source={{uri: item.pic1}} />
                        <Text style={styles.productTitle}>{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={styles.productPrice}>{item.price}</Text>

                    <View style={[styles.cardFooter]}>

                        <View style={styles.cardFooterSection2}>
                            <TouchableOpacity style={[styles.iconContainer, styles.shadow]}>
                                <Image style={styles.cardIcon} source={require("../../assets/icons/heart.png")} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardFooterSectionCenter}>
                            <TouchableOpacity>
                                <Text style={styles.rating}>9/10</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.cardFooterSection}>
                            <TouchableOpacity style={[styles.iconContainer, styles.shadow]}>
                                <Image style={styles.cardIcon} source={require("../../assets/icons/plus.png")} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            )}
            />
                    
                
    </View>
        
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        height: "100%",
        
    },
    card:{
        backgroundColor: '#ffdbe0',
        backgroundColor: '#fff6f4',
        backgroundColor: '#a68cbf',
        borderRadius: 25,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 8,
        // marginTop: 60,
        marginBottom: 30,
        marginTop: 5,
        maxWidth: '45%'
    },
    shadow,
    cardPic:{
        width:90,
        height: 90,
        marginBottom: 10,
        // marginTop: -65
    },
    iconContainer:{
        padding: 5,
        backgroundColor: '#ffdbe0',
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
    },
    cardIcon:{
        height: 20,
        width: 20,
    },
    cardFooter:{
        flexDirection: 'row',
        marginTop: 0,
        // backgroundColor: '#fff6f4',
        width: '100%',
        borderRadius: 30,
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 4
    },
    cardFooterSection:{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 1,
        paddingTop: 0,
    },
    cardFooterSection2:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 0,
    },
    productTitle:{
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 0,
        color: 'whitesmoke'
    },
    productPrice:{
        color: 'gold',
        fontWeight: 'bold',
        fontSize: 15
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    rating:{
        lineHeight: 30,
        fontWeight: 'bold',
        color: 'whitesmoke',
        fontSize: 13
    },
    activeLike:{
        backgroundColor: '#ff4483'
    },
    activeAdd:{
        backgroundColor: '#2af400'
    }
})

export default ProductsCards