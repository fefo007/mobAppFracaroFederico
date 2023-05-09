import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ProdDetail = ({image,name,descript}) => {
  return (
    <View style={styles.detail}>
        <Image   
        source={image}/>
        <Text>
            {name}
        </Text>
        <Text>
            {descript}
        </Text>
        <View>
            <Button
            title='Comprar'/>
            <Button
            title='+Carrito'/>
        </View>
    </View>
  )
}

export default ProdDetail