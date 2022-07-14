import {View,Text,TouchableOpacity,StyleSheet,Dimensions, StatusBar} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native'

const{width,height}=Dimensions.get('window');

const Page20=()=>
{
  const navigation=useNavigation();
  return(
      <View style={styles.container}>
          <StatusBar backgroundColor={'#eee'}  barStyle="dark-content"/>

          
            <Text style={styles.dept}>
              Doctors availability
            </Text>

            <Text style={styles.doctr}>
              1. Dr. Dhanya S P
              <Text style={styles.space}>
              .                   .
            </Text>
              <ToggleSwitch style={styles.switch}
                    isOn={true}
                    onColor="green"
                    offColor="red"
                    //label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900", }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}/>
            </Text>
           
            <Text style={styles.doctr}>
              2. Dr. Vivek Sudakaran
              <Text style={styles.space}>
              .          .
            </Text>
              <ToggleSwitch style={styles.switch}
                    isOn={true}
                    onColor="green"
                    offColor="red"
                    //label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900", }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}/>
            </Text>
            <Text style={styles.doctr}>
              3. Dr. Joy Joseph
              <Text style={styles.space}>
              .                  .
            </Text>
              <ToggleSwitch style={styles.switch}
                    isOn={true}
                    onColor="green"
                    offColor="red"
                    //label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900", }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}/>
            </Text>
            <Text style={styles.doctr}>
              4. Dr. Ammini Chandran
              <Text style={styles.space}>
              .         .
            </Text>
              <ToggleSwitch style={styles.switch}
                    isOn={false}
                    onColor="green"
                    offColor="red"
                    //label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900", }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}/>
            </Text>
            <Text style={styles.doctr}>
              5. Dr. Jaya Mohan
              <Text style={styles.space}>
              .                  .
            </Text>
              <ToggleSwitch style={styles.switch}
                    isOn={true}
                    onColor="green"
                    offColor="red"
                    //label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900", }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}/>
            </Text>
            <Text style={styles.dept}>
              Palliative Care Availability
            </Text>
            <Text style={styles.doctr}>
              1. Dr. Dhanya S P
              <Text style={styles.space}>
              .                  .
            </Text>
              <ToggleSwitch style={styles.switch}
                    isOn={true}
                    onColor="green"
                    offColor="red"
                    //label="Example label"
                    labelStyle={{ color: "black", fontWeight: "900", }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}/>
            </Text>
            </View>
  )

}
const config = {
    deviceWidth: Dimensions.get('window').width,
    deviceHeight: Dimensions.get('window').height
}
const styles=StyleSheet.create({
    container:{
         padding:40
             
    },
    dept:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'black',
      },
      space:
      {
        color:'white',
      },
    doctr:{
        textAlign:'left',
        fontSize:15,
        padding:25,
        paddingLeft: config.deviceWidth * 0,
        color:'black',
    } 
  
  })
  export default Page20;