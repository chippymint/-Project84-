import React from "react";
import {createStackNavigator} from " @react-navigation/stack";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";

const Stack = creatStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
        initialRouteName = "Home"
        screenOption = {{
            headerShown: false
        }}
    )
}