import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Step1, Step2, Step3, RegistrationSummary} from './steps';

export const RegistrationForm = () => {
  const RegistrationFormStack = createStackNavigator();

  return (
    <RegistrationFormStack.Navigator>
      <RegistrationFormStack.Screen
        name="Step1"
        component={Step1}
        options={{
          headerTitle: 'Main information',
        }}
      />
      <RegistrationFormStack.Screen
        name="Step2"
        component={Step2}
        options={{
          headerTitle: 'Photo Upload',
        }}
      />
      <RegistrationFormStack.Screen
        name="Step3"
        component={Step3}
        options={{
          headerTitle: 'Bio',
        }}
      />
      <RegistrationFormStack.Screen
        name="RegistrationSummary"
        component={RegistrationSummary}
        options={{
          headerTitle: 'Here is your profile',
        }}
      />
    </RegistrationFormStack.Navigator>
  );
};
