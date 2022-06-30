import { NavigationContainer,StackRouter,useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page2 from "./page2";
import Page3 from "./page3";
import React from "react";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
const Navigator=()=>
{
    const Stack=createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Page2"  children={()=><Page2/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page5"  children={()=><Page5/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page4"  children={()=><Page4/>} options={{headerShown:false}}/>
                
                <Stack.Screen name="Page3"  children={()=><Page3/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page6"  children={()=><Page6/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page7"  children={()=><Page7/>} options={{headerShown:false}}/>
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;