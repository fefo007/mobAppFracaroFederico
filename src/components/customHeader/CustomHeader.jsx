import { Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import hamburgerMenu from '../../assets/hamburger.png'
import openHamburgerMenu from '../../assets/openHamburger.png'
import { TouchableWithoutFeedback } from 'react-native'
import CustomModal from '../customModal/CustomModal'


const CustomHeader = ({newStyles}) => {
    const [menu,setMenu] = useState(hamburgerMenu)
    const [modalOn,setModalOn] = useState(false)

    const displayMenu = ()=>{
        if(menu===hamburgerMenu){
            setMenu(openHamburgerMenu)
            setModalOn(true)
        }else{
            setMenu(hamburgerMenu)
            setModalOn(false)
        }
    }
    const closeModal = ()=>{
        setModalOn(false)
    }
    return (
        <View style={styles.header}>
            <TouchableWithoutFeedback onPress={displayMenu}>
            <Image
            style={styles.image}
            source={menu}/>
            </TouchableWithoutFeedback>
            <Text style={{...styles.text,...newStyles}}>
                Bienvenido
            </Text>
            <Image
            style={styles.image}
            source={require('../../assets/carrito.webp')}/>
            <CustomModal 
            isVisible={modalOn} 
            closeIt={closeModal}
            />
        </View>
    )
}

export default CustomHeader

