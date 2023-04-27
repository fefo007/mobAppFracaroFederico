import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, 
        StyleSheet, 
        Text, 
        View ,
        FlatList, 
        TextInput, 
        Button, 
        TouchableOpacity, 
        SafeAreaView} from 'react-native';
import CustomCard from './src/components/customCard/CustomCard';
import CustomModal from './src/components/customModal/CustomModal';

export default function App() {

  const [inputText,setInpuntText]= useState('')
  const [products,setProducts]= useState([])
  const [prodSelect,setProdSelect] = useState({})
  const [modalOn,setModalOn] = useState(false)

  const onChangeInputText = (text)=>{
    setInpuntText(text)
  }

  const addProduct = ()=>{
    const updateProd = products.find(prod => prod.name == inputText)
    if(updateProd){
      const prodIndex = products.findIndex(prod => prod.name == inputText)
      updateProd.quant = updateProd.quant + 1
      products.splice(prodIndex, 1, updateProd)
      setProducts(prodList=>[...prodList])
      setInpuntText('')}
      else{
        setProducts(prodList=>[...prodList,{name:inputText,id:Math.random().toString(),quant:1}])
        setInpuntText('')}
      }    
  
      const deleteProd = (product)=>{
        setProducts(prodList=>prodList.filter(prod=>prod.id !== product.id))
        setModalOn(!modalOn)
      }

      const openModal = (prod)=>{
        setProdSelect(prod)
        setModalOn(true)
      }
      const closeModal = ()=>{
        setModalOn(false)
      }
  const renderItem = ({item})=>(
    <View>
      <Text>
        {item.name}
      </Text>
      <Text>
        {item.quant}
      </Text>
      <Button
      title='eliminar'
      color='red'
      onPress={()=>openModal(item)}/>
      {/* <TouchableOpacity onPress={()=>openModal(item)}>
        <View>
          <Text>Eliminar</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  )

  return (
    <SafeAreaView 
    style={styles.container}>
        <Text>HOLA Coder!!!!!</Text>
        <Text>Otro texto mas</Text>
        <View>
          <TextInput 
          style={styles.input} 
          placeholder='escriba un producto' 
          onChangeText={onChangeInputText}
          value={inputText}/>
          <Button 
          title='guardar' 
          onPress={addProduct}/>
        </View>
        <View style={styles.flatContainer}>
          <FlatList 
          style={styles.flat}
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.scrollContainer}>
            <ScrollView>
              <CustomCard 
              imageUri={require('./src/assets/products/2.jpg')} 
              prodName={'Producto 2'} 
              description={'descripcion del producto'}/>
              <CustomCard 
              imageUri={require('./src/assets/products/3.jpg')} 
              prodName={'Producto 3'} 
              description={'descripcion del producto'}/>
              <CustomCard 
              imageUri={require('./src/assets/products/4.jpg')} 
              prodName={'Producto 4'} 
              description={'descripcion del producto'}/>
              <CustomCard 
              imageUri={require('./src/assets/products/5.jpg')} 
              prodName={'Producto 5'} 
              description={'descripcion del producto'}/>
              <CustomCard 
              imageUri={require('./src/assets/products/1.jpg')} 
              prodName={'Producto 1'} 
              description={'descripcion del producto'}/>
            </ScrollView>
          </View>
        <CustomModal 
        isVisible={modalOn} 
        actionDelete={()=>deleteProd(prodSelect)}
        product={prodSelect}
        closeIt={closeModal}/>
        {/* <StatusBar 
        style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDFFBB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  scrollContainer:{
    marginTop:10,
    marginBottom:10,
    width:400,
    height:450,
    alignItems:'center',
    alignContent:'space-between'
  },
  scroll:{
    backgroundColor:'pink',
    marginTop:10
  },
  flatContainer:{
    width:400,
    height:200,
  },
  flat:{
    backgroundColor:'yellow',
    borderColor:'black',
    borderWidth:5
  },
  input:{
    width:300,
    height:50,
    backgroundColor:'lightblue',
    borderRadius:50,
    paddingLeft:10,
  }
});
