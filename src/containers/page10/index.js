import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar} from 'react-native';
import React from 'react';



const{width,height}=Dimensions.get('window')

const Page10=()=>
{
    
    return(
        
      <View style={styles.card}>
        <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
       
            <Text style={styles.txt2}>
            {'\n'}
            POLIO VACCINATION
            {'\n'}
        </Text>
        
    </View>
       
      
     
      

    )
}
const styles=StyleSheet.create({
    
   
     txt1:{
        textAlign:'center',fontSize:20,color:'black',fontWeight:'bold'
     },
     txt2:{
        fontSize:13,color:'black',fontWeight:'bold',textAlign:'center'
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
export default Page10;
