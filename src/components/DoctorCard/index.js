
import { View,Text,Image,StyleSheet } from "react-native";
import React from "react";
import DoctorImage from '../../assets/doctor1.png';
import DoctorImage1 from '../../assets/doctor2.jpg';



const DoctorCard=(data)=>
    {
        return(
            <View style={styles.card}>
            <Image source={data.image} style={styles.image}/>
           <Text  style={styles.txt1}>
                    
                    {data.name}
             </Text>
             <Text style={styles.txt2}>
                 {'\n'}
               {'\t \t \t \t \t \t'}Available timing :{data.avtime}{'\n'}
               {'\t \t \t \t \t \t'}Available Days   :{data.avdays} {'\n'}
             </Text>
     
            </View>
        )
    }
    const styles=StyleSheet.create({
        container:{
             padding:40
                 
        },
        bluebn:{
            padding:25,
            shadowColor: 'black',
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 10,
            elevation: 3,
            backgroundColor: 'white',
            borderRadius:20,
            marginTop:50
    
        } ,txt1:{
            textAlign:'center',fontSize:20,color:'black',fontWeight:'bold'
        }
        ,txt2:{
            fontSize:13,color:'black'
        },
        card:{
        
            margin:20,
            borderRadius:15,
            paddingVertical:10,
            alignContent:'center',
            backgroundColor:'#fff',
            shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
    
        },
        image:{width:200,height:200,alignSelf:'center',marginVertical:20}
        
    
    })

    
    export default DoctorCard;