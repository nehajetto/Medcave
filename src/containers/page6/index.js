import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar} from 'react-native';
import React from 'react';


const{width,height}=Dimensions.get('window')

const Page6=()=>
{
    
    return(
     <View >
      <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
      <View style={styles.card}>
      <Text  style={styles.txt1}>
               
                Dr.Jaya Mohan(ENT)
        </Text>
        <Text style={styles.txt2}>
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

    } ,txt1:{
        textAlign:'center',fontSize:20,color:'black',fontWeight:'bold'
    }
    ,txt2:{
        textAlign:'center',fontSize:13,color:'black',
    },
    card:{
    
        margin:30,
        borderRadius:15,
        paddingVertical:30,
        alignContent:'center',
        backgroundColor:'#fff',
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5

    }
    

})
export default Page6;
