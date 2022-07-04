import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page2 from "./page2";
import Page3 from "./page3";
import React from "react";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import Page10 from "./page10";


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
                <Stack.Screen name="Page8"  children={()=><Page8/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page9"  children={()=><Page9/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page10"  children={()=><Page10/>} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;