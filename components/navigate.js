import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Auth from "./Auth";
import Main from "./Main";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Auth'
          component={Auth}
          options={{title: 'Авторизація'}}
        />
        <Stack.Screen 
          name='SignIn'
          component={SignIn}
          options={{title: 'Увійти'}}
        />
        <Stack.Screen 
          name='SignUp'
          component={SignUp}
          options={{title: 'Зареєструватися'}}
        />
        <Stack.Screen 
          name='Main'
          component={Main}
          options={{title: 'Головна'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}