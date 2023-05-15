import { View,Text,TouchableWithoutFeedback, Button } from 'react-native'
import React from 'react'

const MenuScreen = ({navigation}) => {

    return (
        <View>
            <TouchableWithoutFeedback>
                <Text>{'Categorias'}</Text>
            </TouchableWithoutFeedback>
            <Button title='a categorias' onPress={()=>navigation.navigate('Categoria')}/>
        </View>
        )
}

export default MenuScreen