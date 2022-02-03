import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const drinks=[
  {
  title: "Coca-cola",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://images.heb.com/is/image/HEBGrocery/000145352'
},
{
  title: "Fanta",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Mountain Dew",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Pepsi",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Dr.Pepper",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Sprite",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Slice",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Red Bull",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},
{
  title: "Slice",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.countdown.co.nz/assets/product-images/zoom/9300675015172.jpg'
},


];




const styles = StyleSheet.create({
    drinkItemStyle: {
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20,
    },
    titleStyle:{
      fontSize:19,
      fontWeight:'600'
    }
})



export default function Softdrinks({navigation,hideCheckbox, marginLeft}) {
  const dispatch= useDispatch();

const selectitem = (item, checkboxValue)=>
dispatch({
  type:'ADD_TO_CART', 
  payload:{
    ...item,
    checkboxValue:checkboxValue}
})
const  cartItems= useSelector(
  state=> state.cartReducer.selectedItems.items 
  );

  const isDrinkInCart= (drink, cartItems)=>
    Boolean(cartItems.find((item)=> item.title === drink.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {drinks.map((drink,index)=>(
    <View key={index}>
    <View style={styles.drinkItemStyle}>
      {hideCheckbox?(<></>):(
      <BouncyCheckbox
      iconStyle={{borderColor:'lightgray', borderRadius:0}}
      fillColor='green'
      isChecked={isDrinkInCart(drink,cartItems)}
      onPress={(checkboxValue)=>selectitem(drink,checkboxValue)}/>)}
      <DrinkInfo drink={drink}/>
      <DrinkImage drink={drink}
      />
      </View>
      <Divider width={0.5} orientation='vertical'/>
 
    </View>
    ))}
         <ViewCart navigation={navigation}/>
      </ScrollView>
  );
}

const DrinkInfo=(props)=>(
  <View style={{width:240, justifyContent:'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.drink.title}</Text>
    <Text>{props.drink.description}</Text>
    <Text>{props.drink.price}</Text>
  </View>
);
const DrinkImage=(props)=>(
  <View>
    <Image source={{uri:props.drink.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
  </View>
)