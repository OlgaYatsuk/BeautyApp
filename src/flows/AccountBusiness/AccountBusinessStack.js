import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RegistrationSummary} from '../Registration/RegistrationForm/steps';

export const RegistrationForm = () => {
  const AccountBusinessStack = createStackNavigator();

  return (
    <AccountBusinessStack.Navigator>
      <AccountBusinessStack.Screen
        name="RegistrationSummary"
        component={RegistrationSummary}
        options={{
          headerTitle: 'Here is your profile',
        }}
      />
    </AccountBusinessStack.Navigator>
  );
};
