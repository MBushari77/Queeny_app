import { useState } from "react"
import { Text, View, StyleSheet, Button, Touchable, Image, TouchableOpacity, Alert, Modal } from "react-native"
import { shadow } from "../../common/styles"

const Nav = ({handleBack, page}) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <View style={styles.nav}>
        {
          page === 'details'?(
            <TouchableOpacity onPress={() => handleBack()} style={styles.view1}>
                <Image style={styles.back} source={require("../../assets/icons/back.png")} />
            </TouchableOpacity>
          ):(
            <View style={styles.view1}></View>
          )
        }
        <View style={styles.view2}>
            <Image style={styles.logo} source={require("../../assets/icons/logo.png")} />
        </View>
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.view3}>
            <Image style={styles.menu} source={require("../../assets/icons/menu.png")} />
        </TouchableOpacity>
        <Modal
          visible={showModal}
          transparent
          onRequestClose={() => setShowModal(false)}
          animationType='slide'
        >
          <View style={styles.modalContainer}>
           <View style={[styles.modal, styles.shadow]}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setShowModal(false)} style={[styles.closeButton, styles.shadow]}>
                <Image style={styles.closeIcon} source={require('../../assets/icons/close.png')} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={[styles.modalButton, styles.shadow]}>
              <Text style={styles.modalButtonText}>المقترحات</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.shadow]}>
              <Text style={styles.modalButtonText}>المعاملات السابقة</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.shadow]}>
              <Text style={styles.modalButtonText}>تواصل معنا</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.danger, styles.shadow]}>
              <Text style={[styles.modalButtonText, styles.dangerText]}>تسجيل خروج</Text>
            </TouchableOpacity>
             
           </View>
          </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    nav:{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        height: '10%'
      },
      view1:{
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      view2:{
        flex: 3,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      view3:{
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        height: 30,
        width: 90
      },
      menu:{
        height: 25,
        width: 25
      },
      back:{
        height: 20,
        width: 20
      },
      modalContainer:{
        backgroundColor: '#00000066',
        padding: 10,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      modal:{
        backgroundColor: 'white',
        padding: '5%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
      },
      shadow,
      modalButton:{
        backgroundColor: 'whitesmoke',
        width: '100%',
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: '5%'
      },
      modalButtonText:{
        fontSize: 15
      },
      modalHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
      },
      closeIcon:{
        width: 20,
        height: 20,
        margin: 8
      },
      closeButton:{
        backgroundColor: 'whitesmoke',
        marginBottom: 15,
        borderRadius: 20
      },
      danger:{
        backgroundColor: '#ff1959',
      },
      dangerText:{
        color: 'white'
      }
})

export default Nav