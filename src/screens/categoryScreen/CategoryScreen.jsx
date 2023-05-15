import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const CategoryScreen = ({navigation}) => {
return (
    <View>
        <TouchableWithoutFeedback >
            <Text>{'Porcelana'}</Text>
        </TouchableWithoutFeedback>
        <Button title='a detalle' onPress={()=>navigation.navigate('Detalle')}/>
    </View>
    )
}

export default CategoryScreen