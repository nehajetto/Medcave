import {View,Text,TouchableOpacity,StyleSheet,Dimensions,StatusBar,Image} from 'react-native';
import React from 'react';
import DoctorImage from '../../assets/doctor1.png';
import DoctorImage1 from '../../assets/doctor2.jpg';

const{width,height}=Dimensions.get('window')

const Page6=()=>
{
    
    return(
     <View >
      <StatusBar backgroundColor={'#eee'} barstyle="dark-content"/>
      <View style={styles.card}>
        <Image source={DoctorImage} style={styles.image}/>
      <Text  style={styles.txt1}>
               
                Dr.Antony Jose(ENT)
        </Text>
        <Text style={styles.txt2}>
            {'\n'}
            {'\t  \t \t \t \t \t'}Available timing :9:00 AM - 12:30 PM {'\n'}
            {'\t  \t \t \t \t \t'}Available Days   :Monday - Friday {'\n'}
        </Text>
       </View>
      <View style={styles.card}>
       <Image source={DoctorImage1} style={styles.image}/>
      <Text  style={styles.txt1}>
               
                Dr.Roy Thelekatt(ENT)
        </Text>
        <Text style={styles.txt2}>
            {'\n'}
          {'\t \t \t \t \t \t'}Available timing :12:30 PM - 5:00 PM {'\n'}
          {'\t \t \t \t \t \t'}Available Days   :Monday - Friday {'\n'}
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
