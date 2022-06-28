import {View,Text,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import React from 'react';

const{width,height}=Dimensions.get('window');

const Page2=()=>
{
  return(
      <View style={styles.container}>


          <TouchableOpacity style={styles.bluebn}>
            <Text style ={styles.mainTxt}>
                DOCTORS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bluebn}>
            <Text style ={styles.mainTxt}>
                LAB FACILITY
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bluebn}>
            <Text style ={styles.mainTxt}>
                PALLIATIVE CARE
            </Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.bluebn}>
            <Text style ={styles.mainTxt}>
                VACCINATION FACILITY
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
    }

})
export default Page2;
