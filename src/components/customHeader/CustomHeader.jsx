import { Text, View,Image } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import hamburgerMenu from '../../assets/hamburger.png'
import openHamburgerMenu from '../../assets/openHamburger.png'
import { TouchableWithoutFeedback } from 'react-native'

const CustomHeader = ({newStyles}) => {
    const [menu,setMenu] = useState(hamburgerMenu)

    const displayMenu = ()=>{
        if(menu===hamburgerMenu){
            setMenu(openHamburgerMenu)
        }else{
            setMenu(hamburgerMenu)
        }
        
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
        </View>
    )
}

export default CustomHeader

