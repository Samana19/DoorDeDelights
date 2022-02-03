import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from '../components/restaurantDetail/ViewCart'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const cakes=[
  {
  title: "Custard Tarts",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://images.squarespace-cdn.com/content/v1/5d55febd409b770001cadffc/1594798442109-5XLS75JV3782XJVOKTHF/Portuguese+Egg+Tarts.png'
},

{
  title: "Tiramisu",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://www.gimmesomeoven.com/wp-content/uploads/2020/07/Tiramisu-Recipe-Cover.jpg'
},
{
  title: "Gulab Jamun",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800'
},
{
  title: "S`mores",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://dinnerthendessert.com/wp-content/uploads/2017/06/Classic-Grilled-SMores.jpg'
},
{
  title: "Churros",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://www.recipetineats.com/wp-content/uploads/2016/08/Churros_9-SQ.jpg'
},
{
  title: "Baklava",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://veggiesociety.com/wp-content/uploads/2020/06/Vegan-Baklava-3.jpg'
},
{
  title: "Rum Cake",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://www.smalltownwoman.com/wp-content/uploads/2016/01/Rum-Cake-DSC_0445-III.jpg'
},
{
  title: "Red-velvet Cake",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://www.recipetineats.com/wp-content/uploads/2016/06/Red-Velvet-Layer-Cake_4.jpg'
},
{
  title: "Chocolate Mousse Cake",
  description:'chill your mind out',
  price:'$1.70',
  image: 'https://meaningfuleats.com/wp-content/uploads/2020/06/gluten-free-chocolate-mousse-cake.jpg'
},

];

const styles = StyleSheet.create({
    dessertsItemStyle: {
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20,
    },
    titleStyle:{
      fontSize:19,
      fontWeight:'600'
    }
})

export default function Desserts({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    {cakes.map((dessert,index)=>(
    <View key={index}>
    <View style={styles.dessertsItemStyle}>
      <BouncyCheckbox
      iconStyle={{borderColor:'lightgray', borderRadius:0}}
      fillColor='green'/>
      <CakeInfo dessert={dessert}/>
      <CakeImage dessert={dessert}/>
      </View>
      <Divider width={0.5} orientation='vertical'/>
 
    </View>
    ))}
         <ViewCart navigation={navigation}/>
      </ScrollView>
  );
}

const CakeInfo=(props)=>(
  <View style={{width:240, justifyContent:'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.dessert.title}</Text>
    <Text>{props.dessert.description}</Text>
    <Text>{props.dessert.price}</Text>
  </View>
);
const CakeImage=(props)=>(
  <View>
    <Image source={{uri:props.dessert.image}} style={{width:90,height:90,borderRadius:8,marginLeft:-30}}/>
  </View>
)
