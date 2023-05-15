
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import MenuScreen from '../../screens/menuScreen/MenuScreen'
import CategoryScreen from '../../screens/categoryScreen/CategoryScreen'
import DetailScreen from '../../screens/detailScreen/DetailScreen'

const NavigationMenu = () => {

    const Stack = createNativeStackNavigator()

return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='Categorias'>
            <Stack.Screen name='Home' component={MenuScreen}/>
            <Stack.Screen name='Categoria' component={CategoryScreen}/>
            <Stack.Screen name='Detalle' component={DetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default NavigationMenu