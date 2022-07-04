import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar,Image} from 'react-native';
import React from 'react';
import DoctorImage2 from '../../assets/doctor3.webp';


const{width,height}=Dimensions.get('window')

const Page7=()=>
{
    
    return(
        
      <View style={styles.card}>
        <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
        <Image source={DoctorImage2} style={styles.image}/>
      <Text  style={styles.txt1}>
               
                Dr.Jaya Mohan(ENT)
        </Text>
        <Text style={styles.txt2}>
            {'\n'}
            {'\t  \t \t \t \t \t'}Available timing :9:00 AM - 12:30 PM {'\n'}
            {'\t  \t \t \t \t \t'}Available Days   :Monday - Friday {'\n'}
        </Text>
       </View>
     
      

    )
}
const styles=StyleSheet.create({
    
   
     txt1:{
        textAlign:'center',fontSize:20,color:'black',fontWeight:'bold'
     },
     txt2:{
        fontSize:13,color:'black'
     },
     image:{
        width:200,height:200,alignSelf:'center',marginVertical:20},
    card:{
        margin:20,borderRadius:15,paddingVertical:10,
        alignContent:'center',backgroundColor:'#fff',shadowColor:'#000',
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.8,
        shadowRadius:2,elevation:5 

    }
    


})
export default Page7;
