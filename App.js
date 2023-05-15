import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {useFonts} from 'expo-font'
import { 
        StyleSheet, 
        Text, 
        View ,
        FlatList, 
        TextInput, 
        Button, 
        TouchableOpacity, 
        SafeAreaView} from 'react-native';
// import CustomModal from './src/components/customModal/CustomModal';
import LogIn from './src/components/logIn/LogIn';
import ScrollProducts from './src/components/srcrollProducts/ScrollProducts';
import NavigationMenu from './src/components/navigationMenu/NavigationMenu';

export default function App() {
  const [loaded] = useFonts({
    'josefinSans-regular':require('./src/assets/fonts/JosefinSans-Regular.ttf')
  })
  // const [inputText,setInpuntText]= useState('')
  // const [products,setProducts]= useState([])
  // const [prodSelect,setProdSelect] = useState({})
  // const [modalOn,setModalOn] = useState(false)
  // const [user,setUser]= useState()

  if(!loaded){
    return null
  }
  // const onChangeInputText = (text)=>{
  //   setInpuntText(text)
  // }

  // const addProduct = ()=>{
  //   const updateProd = products.find(prod => prod.name == inputText)
  //   if(updateProd){
  //     const prodIndex = products.findIndex(prod => prod.name == inputText)
  //     updateProd.quant = updateProd.quant + 1
  //     products.splice(prodIndex, 1, updateProd)
  //     setProducts(prodList=>[...prodList])
  //     setInpuntText('')}
  //     else{
  //       setProducts(prodList=>[...prodList,{name:inputText,id:Math.random().toString(),quant:1}])
  //       setInpuntText('')}
  //     }    
  
  //     const deleteProd = (product)=>{
  //       setProducts(prodList=>prodList.filter(prod=>prod.id !== product.id))
  //       setModalOn(!modalOn)
  //     }

  //     const openModal = (prod)=>{
  //       setProdSelect(prod)
  //       setModalOn(true)
  //     }
  //     const closeModal = ()=>{
  //       setModalOn(false)
  //     }
  // const renderItem = ({item})=>(
  //   <View>
  //     <Text>
  //       {item.name}
  //     </Text>
  //     <Text>
  //       {item.quant}
  //     </Text>
  //     <Button
  //     title='eliminar'
  //     color='red'
  //     onPress={()=>openModal(item)}/>
  //     {/* <TouchableOpacity onPress={()=>openModal(item)}>
  //       <View>
  //         <Text>Eliminar</Text>
  //       </View>
  //     </TouchableOpacity> */}
  //   </View>
  // )
    
  // const handleLogIn = selectedUser => {
  //   setUser(selectedUser)
  // }

  // let content = <LogIn onLogIn={handleLogIn}/>
  // if(user){
  //   content = <ScrollProducts newStyle={styles.headerFont}/>
  // }
  
  return (
    <NavigationMenu/>
  )

    // <SafeAreaView 
    // style={styles.container}>
    //     <View style={styles.scrollContainer}>
    //     <ScrollProducts newStyle={styles.headerFont}/>
    //     </View>
        {/* <View>
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
        <CustomModal 
        isVisible={modalOn} 
        actionDelete={()=>deleteProd(prodSelect)}
        product={prodSelect}
        closeIt={closeModal}/>
        </View> */}
        {/* <StatusBar 
        style="auto" /> */}
    // </SafeAreaView>
    // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DDFFBB',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  scrollContainer:{
    flex:1,
    marginTop:0,
    marginBottom:10,
    width:'100%',
    height:'100%',
    alignItems:'center',
    alignContent:'space-between',
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
  },
  headerFont:{
    fontFamily:'josefinSans-regular'
  }
});
