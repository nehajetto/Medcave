import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const{width,height}=Dimensions.get('window');

const Page2=()=>
{
    const navigation=useNavigation();
  return(
      <View style={styles.container}>
          <StatusBar backgroundColor={'#eee'}  barStyle="dark-content"/>

            <View style={{flexDirection:'row'}}>
                <View style={{flex:0.5,padding:2}}>
                    <TouchableOpacity style={{backgroundColor:"#22C7B8",paddingVertical:110,borderRadius:5} } onPress={()=>navigation.navigate('Page3')}>
                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>DOCTORS  </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.5,padding:2}}>
                    <TouchableOpacity style={{backgroundColor:'#22C7B8',paddingVertical:110,borderRadius:5}} onPress={()=>navigation.navigate('Page12')}>
                        <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>LAB FACILITIES</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:0.5,padding:2}}>
                    <TouchableOpacity style={{backgroundColor:'#22C7B8',paddingVertical:110,borderRadius:5}} onPress={()=>navigation.navigate('Page9')}>
                    <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>PALLIATIVE CARE</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.5,padding:2}}>
                    <TouchableOpacity style={{backgroundColor:'#22C7B8',paddingVertical:100,borderRadius:5}} onPress={()=>navigation.navigate('Page10')}>
                        <Text style={{textAlign:'center',color:'#fff',fontWeight:'bold'}}>VACCINATION FACILITY</Text>
                    </TouchableOpacity>
                </View>

            </View>

            

          <TouchableOpacity style={styles.bluebn}  onPress={()=>navigation.navigate('Page14')}>
            <Text style ={styles.mainTxt}>
                 NOTICE BOARD
            </Text>
          </TouchableOpacity>
 
          
      

      </View>
  )

}
const styles=StyleSheet.create({
    container:{
         padding:40,  
    },
    new:{
        height:40
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
