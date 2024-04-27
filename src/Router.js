import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/HomeScreen/Home';
import Detail from './pages/DetailScreen/Detail';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown:false
                }} />
                <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{ headerShown:false
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;