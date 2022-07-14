import {View,Text,TouchableOpacity,StyleSheet,Button,Dimensions,StatusBar,Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import DoctorImage13 from '../../assets/doctornurse.jpeg';


const{width,height}=Dimensions.get('window')

const Page13=()=>
{
    const navigation=useNavigation();   
    return(
        
      <View style={styles.body}>
        <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
        <Image source={DoctorImage13} style={styles.image}/>
        <Text style={styles.text}></Text><Text style={styles.text}></Text>
        
        <Text style={styles.text}>Sreekrishnapuram Government Hospital</Text>
        <Text style={styles.text}>Near Hospital junction, Sreekrishnapuram, Kerala </Text>
        <Text style={styles.text}>Phone : 0466 226 1744</Text>
        <Text style={styles.text}>Pin : 679513</Text>
        <Text style={styles.text}></Text><Text style={styles.text}></Text>
        
        <View style={styles.button}>
        <Button onPress = {()=> navigation.navigate('Page2')}  color="#22C7B8"title = '    Go    ' ></Button>
        <Text style={styles.text}></Text>
       </View>
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
        color: 'black',
        fontSize: 20,
        marginTop:5
      },
      button:{
        flex: 1,
        justifyContent:'flex-end',
        
      },
     
     image:{
        width:400,height:400,alignSelf:'center',marginVertica:70},
      


    


})
export default Page13;