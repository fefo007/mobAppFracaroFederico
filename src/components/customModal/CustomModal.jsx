import { Text, View ,Modal,Button} from 'react-native'
import React from 'react'
import styles from './styles'

const CustomModal = ({isVisible,actionDelete,product,closeIt}) => {
  return (
      <Modal 
      visible={isVisible} 
      animationType='slide' 
      transparent={true}
      >
        <View style={styles.modalInnerContainer}>
          <View style={styles.modal}>
            <Text>
              Desea eliminar el producto 
            </Text>
            <Text>{product.name}</Text>
            <Button 
            title='Confirmar'
            onPress={()=>actionDelete()}
            />
            <Button
            title='X'
            onPress={closeIt}
            />
          </View>
        </View>
      </Modal>
  )
}

export default CustomModal

