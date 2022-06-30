import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const{width,height}=Dimensions.get('window');

const Page3=()=>
{
  const navigation=useNavigation();
  return(
      <View style={styles.container}>
          <StatusBar backgroundColor={'#eee'}  barStyle="dark-content"/>

          
            <Text style={styles.dept}>
              DEPARTMENTS
            </Text>
          

          <TouchableOpacity style={styles.bluebn} onPress={()=>navigation.navigate('Page6')}>
            <Text style ={styles.mainTxt}>
                ENT SPECIALIST
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bluebn}  >
            <Text style ={styles.mainTxt}>
                DERMATOLOGIST
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bluebn} onPress={()=>navigation.navigate('Page7')}>
            <Text style ={styles.mainTxt}>
                GENERAL MEDICINE
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

    },
    mainTxt:{
        textAlign:'center'
    },
    dept:{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:30
    }
    

})
export default Page3;
