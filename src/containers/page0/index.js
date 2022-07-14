import {View,Text,TouchableOpacity,StyleSheet,Button,Dimensions,StatusBar,Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import DoctorImage12 from '../../assets/hand.jpeg';


const{width,height}=Dimensions.get('window')

const Page0=()=>
{
    const navigation=useNavigation();   
    return(
        
      <View style={styles.body}>
        <Text style={styles.text}>MEDCAVE</Text>
        <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
        <Image source={DoctorImage12} style={styles.image}/>
        <Text style={styles.text1}>REACH YOUR HEALTH POTENTIAL  {"\n"}</Text>
        
        <Button onPress = {()=> navigation.navigate('Page13')} color="#22C7B8"title = '    GO    '></Button>
        <Text>{"\n"}</Text>
        <Text>   
    
    <Text onPress = {()=> navigation.navigate('Page15')}> Admin?</Text>
    
    </Text>
       </View>
     
      

    )
}
const styles=StyleSheet.create({
    container:{
         padding:40
             
    },
    body: {
        flex: 1,
        backgroundColor: '#ffffff', 
        alignItems:'center',
        justifyContent:'center',
      },
    text:{
        color: '#22C7B8',
        fontSize: 50,
        marginTop:0
      },
      text1:{
        color: '#22C7B8',
        fontSize: 18,
        marginTop:0
      },
      
     
     image:{
        width:200,height:300,alignSelf:'center',marginVertical:80},


    


})
export default Page0;