// @flow
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RegistrationScreen} from './src/flows/Registration';
import {RegistrationForm} from './src/flows/Registration/RegistrationForm';
import {HomeScreen} from './src/flows/Home';
import {BookingScreen} from './src/flows/Booking';
import {commonStyles} from './src/framework/ui/styles';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RegistrationScreen">
          <Stack.Screen
            name="RegistrationScreen"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RegistrationForm"
            component={RegistrationForm}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{
              headerStyle: commonStyles.headerDark,
              title: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
