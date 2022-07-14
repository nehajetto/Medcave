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
import Page12 from "./page12";
import Page0 from "./page0";
import Page13 from "./page13";
import Page14 from "./page14";
import Page20 from "./page20";
import Page15 from "./page15";

const Navigator=()=>
{
    const Stack=createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Page0"  children={()=><Page0/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page13"  children={()=><Page13/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page2"  children={()=><Page2/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page5"  children={()=><Page5/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page4"  children={()=><Page4/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page3"  children={()=><Page3/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page6"  children={()=><Page6/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page7"  children={()=><Page7/>} options={{headerShown:false}}/>
                <Stack.Screen name="Page8"  children={()=><Page8/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page9"  children={()=><Page9/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page10"  children={()=><Page10/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page12"  children={()=><Page12/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page14"  children={()=><Page14/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page20"  children={()=><Page20/>} options={{headerShown:false}}/>
               <Stack.Screen name="Page15"  children={()=><Page15/>} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;