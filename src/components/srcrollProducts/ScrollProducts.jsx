import { View,ScrollView} from 'react-native'
import React from 'react'
import CustomHeader from '../customHeader/CustomHeader'
import CustomCard from '../customCard/CustomCard'
import styles from './styles'

const ScrollProducts = ({newStyle}) => {
return (
    <View>
        <CustomHeader newStyles={newStyle}/>
        <ScrollView contentContainerStyle={styles.scroll}>
            <View>
                <CustomCard 
                imageUri={require('../../assets/products/2.jpg')} 
                prodName={'Producto 2'} 
                description={'descripcion del producto'}
                />
                <CustomCard 
                imageUri={require('../../assets/products/3.jpg')} 
                prodName={'Producto 3'} 
                description={'descripcion del producto'}
                />
                <CustomCard 
                imageUri={require('../../assets/products/4.jpg')} 
                prodName={'Producto 4'} 
                description={'descripcion del producto'}
                />
                <CustomCard 
                imageUri={require('../../assets/products/5.jpg')} 
                prodName={'Producto 5'} 
                description={'descripcion del producto'}
                />
                <CustomCard 
                imageUri={require('../../assets/products/1.jpg')} 
                prodName={'Producto 1'} 
                description={'descripcion del producto'}
                />
            </View>
        </ScrollView>
    </View>
)
}

export default ScrollProducts