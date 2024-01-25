import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../widgets/Header';
import { shadow } from '../../common/styles';

import CategoryItems from '../widgets/CategoryItems';
import api from '../../api/api';
import ProductsCards from '../widgets/ProductsCards';

 

const Home = ({goTo}) => {
  const [items, setItems] = useState([])
  const [refresh, setRefresh] = useState(false)
  const getProducts = async() => {
      let data = await api.get('/product')
      setItems(data.data.data)
  }
  useEffect(() => {
      getProducts()
      setRefresh(true)
  }, [refresh])


    const [ads, setAds] = useState([{title: "hello"}, {title: "hi there"}])
    const [term, setTerm] = useState(-1)
    const categories = [
      {name: 'اخرى', icon: require("../../assets/icons/i1.png")},
      {name: 'عطور', icon: require("../../assets/icons/i2.png")},
      {name: 'اكسسوارات', icon: require("../../assets/icons/i3.png")},
      {name: 'مرطبات', icon: require("../../assets/icons/i4.png")},
      {name: 'مستحضرات', icon: require("../../assets/icons/i1.png")}
    ]
    const getALl = async () => {
      try {
        let res = await api.get('/ad')
        setAds(res.data.data)
      } catch (error) {
        console.log('err')
      }
    }
  return (
    <View style={[styles.container]}>
      <Header />
      <FlatList style={styles.categories} data={categories} renderItem={({item, index}) => {
        return <CategoryItems
          name={item.name}
          iconUrl={item.icon}
          index={index}
          term={index === term}
          handlePress={() => setTerm(index)
        }
        />
      }} 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
       />
       <View style={styles.cardsContainer}>
        {
          refresh?(
            <ProductsCards products={items} goTo={goTo} />
          ):null
        }
       </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
      paddingBottom: 5,
    },
    shadow,
    cardsContainer:{
      height: 490,
    }
})

export default Home


// import { useEffect, useState } from 'react';
// import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
// import Header from '../widgets/Header';
// import { shadow } from '../../common/styles';

// import CategoryItems from '../widgets/CategoryItems';
// import api from '../../api/api';
// import ProductsCards from '../widgets/ProductsCards';

 

// const Home = ({goTo}) => {
//     const [ads, setAds] = useState([{title: "hello"}, {title: "hi there"}])
//     const [term, setTerm] = useState(-1)
//     const categories = [
//       {name: 'عطور', icon: require("../../assets/icons/i2.png")},
//       {name: 'اكسسوارات', icon: require("../../assets/icons/i3.png")},
//       {name: 'مرطبات بشرة', icon: require("../../assets/icons/i4.png")},
//       {name: 'مستحضرات تجميل', icon: require("../../assets/icons/i1.png")}
//     ]
//     const getALl = async () => {
//       try {
//         let res = await api.get('/ad')
//         setAds(res.data.data)
//       } catch (error) {
//         console.log('err')
//       }
//     }
//   return (
//     <View style={[styles.container]}>
//       <Header />
//       <View style={styles.center}>
//         <Text style={styles.title}>الأقسام والأصناف</Text>
//         <FlatList style={styles.categories} numColumns={2} data={categories} renderItem={({item, index}) => {
//           return <CategoryItems
//             name={item.name}
//             iconUrl={item.icon}
//             index={index}
//             term={index === term}
//             handlePress={() => setTerm(index)
//           }
//           />
//         }} 
//         />
//       </View>
//        <View style={styles.cardsContainer}>
//          {/* <ProductsCards goTo={goTo} /> */}
//        </View>
//     </View>
//   )
// }


// const styles = StyleSheet.create({
//     container:{
//       paddingBottom: 5,
//     },
//     shadow,
//     cardsContainer:{
//       height: 490,
//     },
//     center:{
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '100%',
//       marginTop: 10
//     },
//     title:{
//       width: '85%',
//       fontSize: 17,
//       fontWeight: 'bold',
//       color: '#666'
//     }
// })

// export default Home