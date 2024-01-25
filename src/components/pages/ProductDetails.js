import { useEffect, useState } from "react"
import { View, Text, Button, Alert, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import api from "../../api/api"
import { shadow } from "../../common/styles"

const ProductDetails = ({paramId}) => {
  const [prod, setProd] = useState([])
  const getData = async () => {
    let data = await api.get('/product/' + paramId)
    setProd(data.data.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <View style={styles.body}>
      <View style={styles.imageConatiner}>
        <Image style={styles.image} source={{uri: prod.pic1}} />
      </View>
      <ImageBackground source={{uri: '../../assets/imgs/backa.jpg'}} style={[styles.detailsCard, styles.shadow]}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}> {prod.name}</Text>
          <Text style={styles.price}> {prod.price} ج س</Text>
          <Text style={styles.about}> {prod.about} </Text>
        </View>
        <View style={styles.center}>
          <TouchableOpacity style={[styles.addToCartButton, styles.shadow]}>
            <View style={styles.textContainer}>
              <Text style={styles.buttonText}>إضافة للسلة</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer, styles.space, styles.shadow]}>
            <Image style={styles.icon} source={require('../../assets/icons/heart.png')} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    height: '80%'
  },
  image:{
    height: 250,
    width: 250
  },
  imageConatiner:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: '40%',
  },
  infoContainer:{
    padding: 10,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  name:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#555',
  },
  price:{
    fontSize: 25,
    marginTop: 1,
    fontWeight: 'bold',
    color: 'gold'
  },
  shadow,
  about:{
    fontSize: 17,
    marginTop: 15,
    color: '#444',
    height: 60,
  },
  addToCartButton:{
    padding: 8,
    backgroundColor: '#a68cbf',
    width: 90,
    width: '70%',
    flexDirection: 'row',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  center:{
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold'
  },
  iconContainer:{
    height: 50,
    width: 50,
    backgroundColor: 'whitesmoke',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer:{
  },
  icon:{
    width: 20,
    height: 20,
  },
  space:{
    marginLeft: 20
  },
  detailsCard:{
    backgroundColor: 'white',
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 50
  }
})

export default ProductDetails