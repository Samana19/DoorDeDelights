import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const bakery=[ 
  {
  title: "Milk Bread",
  description:'Probably the lightest, fluffiest, most tender bread you will come across',
  price:'$0.90',
  image: 'https://static.fanpage.it/wp-content/uploads/sites/22/2021/04/Condensed-milk-pao-bread-20-1200x1200.jpg'
},
{
  title: "Brown Bread",
  description:'Thick crust, crunchy in places, and       a tender but dense interior',
  price:'$1.40',
  image: 'https://cdn.cdkitchen.com/recipes/images/2019/01/50428-8498-mx.jpg'
},
{
  title: "Multigrain Brown Bread",
  description:'a chewy texture with distinct flake identity',
  price:'$1.70',
  image: 'https://storage.googleapis.com/pricemandu.com/images/products/full/4bae16d661d2a10f3701052021cf124a7badc17f.jpg'
},
{
  title: "Garlic Bread",
  description:'Laden with tropical herbs, cheese,  and garlic butter',
  price:'$2.40',
  image: 'https://i.ytimg.com/vi/ZxZO9wdOHPU/maxresdefault.jpg'
},
{
  title: "Cheese Croissant",
  description:'Cheesy, buttery & flaky delight',
  price:'$0.60',
  image: 'https://media.istockphoto.com/photos/savory-croissants-stuffed-with-emmental-cheese-picture-id615639844?k=20&m=615639844&s=612x612&w=0&h=EdYBBhkH7rxBTBpDKJuXGdW4SZWYBZqohhT9FMp0OHU='
},
{
  title: "Chocolate Croissant",
  description:'Warm & chocolaty puff pastry',
  price:'$0.60',
  image: 'https://images.squarespace-cdn.com/content/v1/5287fa22e4b0f296720af5f7/1440878884280-TAQ8HDMWJ0TRFRS7CV8L/image-asset.jpeg'
},
{
  title: "Choco-chip Muffins",
  description:'It`s light, fluffy & chocolaty, just like  its supposed to be',
  price:'$0.40',
  image: 'https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2014/05/Jumbo-Bakery-Style-Chocolate-Chunk-Banana-Muffins.jpg'
},
{
  title: "Butter Cookies",
  description:'Buttery crunchy delight',
  price:'$1.70',
  image: 'https://www.foodelicacy.com/wp-content/uploads/2020/12/butter-cookies-1-3.jpg'
},
{
  title: "Truffle Chocolate Brownie",
  description:'Share the love with these decadent truffle chocolate brownies',
  price:'$1.25',
  image: 'https://www.sprinklesomesugar.com/wp-content/uploads/2015/10/IMG_6758-2.jpg'
},
{
  title: "Cinnamon Doughnut",
  description:'Soft and Fluffy yeasted cinnamon doughnuts',
  price:'$2.40',
  image: 'https://www.texanerin.com/content/uploads/2018/05/gluten-free-donuts-1.jpg'
},
{
  title: "Eclair",
  description:'Chocolate-frosted pastry filled with whipped cream or custard.',
  price:'$3.50',
  image: 'https://nationaltoday.com/wp-content/uploads/2021/06/National-Chocolate-Eclair-Day.jpg'
},

];

const styles = StyleSheet.create({
    bakeryItemStyle: {
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20,
    },
    titleStyle:{
      fontSize:19,
      fontWeight:'600'
    }
})

export default function Bakery({navigation}) {
  const dispatch= useDispatch();


  const selectitem = (item, checkboxValue)=>dispatch({
    type:'ADD_TO_CART', 
    payload:{
      ...item,
      checkboxValue:checkboxValue}
  })
  const  cartItems= useSelector(
    state=> state.cartReducer.selectedItems.items 
    );
  
    const isBakeInCart= (bake, cartItems)=>
      Boolean(cartItems.find((item)=> item.title === bake.title));
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {bakery.map((bake,index)=>(
    <View key={index}>
    <View style={styles.bakeryItemStyle}>
      <BouncyCheckbox
      iconStyle={{borderColor:'lightgray', borderRadius:0}}
      fillColor='green'
      isChecked={isBakeInCart(bake,cartItems)}
       onPress={(checkboxValue)=>selectitem(bake,checkboxValue)}/>
      <BakeInfo bake={bake}/>
      <BakeImage bake={bake}/>
      </View>
      <Divider width={0.5} orientation='vertical'/>
 
    </View>
    ))}
         <ViewCart navigation={navigation}/>
      </ScrollView>
  );
}

const BakeInfo=(props)=>(
  <View style={{width:240, justifyContent:'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.bake.title}</Text>
    <Text>{props.bake.description}</Text>
    <Text>{props.bake.price}</Text>
  </View>
);
const BakeImage=(props)=>(
  <View>
    <Image source={{uri:props.bake.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
  </View>
)
