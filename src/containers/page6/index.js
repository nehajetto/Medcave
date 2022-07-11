import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar,Image, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';

import DoctorCard from '../../components/DoctorCard';
import { firebase } from '@react-native-firebase/app';

const{width,height}=Dimensions.get('window')

const Page6=()=>
{
    const [doctors,setDoctors]=useState([]);
    
    useEffect(()=>
    {
        fetchData();
    },[])

    const fetchData=async()=>
    {
        try{
    
        
    }catch(err){alert}
    }

    return(
     <View >
      <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
        <ScrollView>
        <DoctorCard />
        </ScrollView> 
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
export default Page6;
