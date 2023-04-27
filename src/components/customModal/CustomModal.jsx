import { Text, View ,Modal,Button} from 'react-native'
import React from 'react'
import styles from './style'

const CustomModal = ({isVisible,actionDelete,product,closeIt}) => {
  return (
      <Modal 
      visible={isVisible} 
      animationType='slide' 
      transparent={true}
      >
      <View style={styles.modal}>
        <Text>
          Desea eliminar el producto 
        </Text>
        <Text>{product.name}</Text>
      </View>
      <Button 
      title='Confirmar'
      onPress={()=>actionDelete()}
      />
      <Button
      title='X'
      onPress={closeIt}
      />
      </Modal>
  )
}

export default CustomModal

