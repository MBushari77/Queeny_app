import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
import { shadow } from '../../common/styles'

const CategoryItems = ({name, iconUrl, index, term, handlePress}) => {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
        <View style={[styles.container, styles.shadow, term? {backgroundColor: '#a68cbf'}: {backgroundColor: 'white'}]}>
            <Text style={[styles.name,   term? {color: 'white'}: {color: '#666'}]}>{name}</Text>
            <View style={[styles.imageContainer, term?styles.shadow:null]}>
                <Image style={styles.image} source={iconUrl} />
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 30,
        marginVertical: 15,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5
    },
    shadow,
    image:{
        width: 25,
        height: 25
    },
    imageContainer:{
        width: 30,
        height: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginLeft: 8
    },
    name:{
        fontSize: 15,
        color: '#272727',
        lineHeight: 30
    }
})

export default CategoryItems

// import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"
// import { shadow } from '../../common/styles'

// const CategoryItems = ({name, iconUrl, index, term, handlePress}) => {
//   return (
//     <TouchableOpacity style={styles.card} onPress={() => handlePress()}>
//         <View style={[styles.container, term? {backgroundColor: 'purple'}: {backgroundColor: '#a68cbf'}]}>
//             <View style={[styles.imageContainer, term?styles.shadow:null]}>
//                 <Image style={styles.image} source={iconUrl} />
//             </View>
//             <Text style={[styles.name,   term? {color: 'white'}: {color: 'white'}]}>{name}</Text>
//         </View>
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//     card:{
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     container:{
//         borderRadius: 15,
//         margin: 5,
//         backgroundColor: 'white',
//         alignItems: 'flex-end',
//         justifyContent: 'center',
//         // flexDirection: 'row',
//         padding: 10,
//         width: 155
//     },
//     shadow,
//     image:{
//         width: 25,
//         height: 25
//     },
//     imageContainer:{
//         width: 30,
//         height: 30,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: 8,
//         marginLeft: 8
//     },
//     name:{
//         fontSize: 15,
//         color: '#272727',
//         lineHeight: 30,
//         fontWeight: 'bold'
//     }
// })

// export default CategoryItems