import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar} from 'react-native';
import React from 'react';


const{width,height}=Dimensions.get('window')

const Page7=()=>
{
    
    return(
     <View>
      <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
       
      <TouchableOpacity style={styles.bluebn}>
        <Text >
            Dr.Thagaraj
        </Text>
      </TouchableOpacity>


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
export default Page7;
