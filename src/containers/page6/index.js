import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar} from 'react-native';
import React from 'react';


const{width,height}=Dimensions.get('window')

const Page6=()=>
{
    
    return(
     <View style={{flexDirection:'row'}}>
      <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
      <View style={{flex:1,padding:2}}>
      <Text style={{textAlign:'center',fontSize:30,color:'black',fontWeight:'bold'}} >
               
               {'\n'} Dr.Jaya Mohan(ENT)
        </Text>
        <Text>
            {'\n'}
            {'\t'}Available timing :9:00 AM - 12:30 PM {'\n'}
          {'\t'}Available Days   :Monday - Friday
        </Text>
      </View>
      
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

    }    
    

})
export default Page6;
