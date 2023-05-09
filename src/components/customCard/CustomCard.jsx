import { Text, View,Image,Button } from 'react-native'
import React from 'react'
import styles from './styles'

const CustomCard = ({imageUri,prodName,description,detail}) => {
return (
    <View style={styles.card}>
        <Image  
        style={styles.images} 
        source={imageUri}/>
        <Text>
            {prodName}
        </Text>
        <Text>
            {description}
        </Text>
        <View>
            <Button
            onPress={detail}
            title='Comprar'/>
            <Button
            title='+Carrito'/>
        </View>
    </View>
)
}

export default CustomCard

