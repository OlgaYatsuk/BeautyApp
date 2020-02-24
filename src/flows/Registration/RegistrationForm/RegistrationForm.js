import React, {useState} from 'react';
import {TextInput, Button} from '../../../framework/ui/components';
import {createStackNavigator} from '@react-navigation/stack';
import {Step1, Step2} from './steps';

export const RegistrationForm = () => {
  const RegistrationFormStack = createStackNavigator();

  return (
    <RegistrationFormStack.Navigator>
      <RegistrationFormStack.Screen
        name="So, let's get to know each other"
        component={Step1}
      />
      <RegistrationFormStack.Screen name="Step2" component={Step2} />
    </RegistrationFormStack.Navigator>
  );
};
