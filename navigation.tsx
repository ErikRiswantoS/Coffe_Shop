import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../Screens/OnboardingScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from'../Screens/ProfileScreen';
import DetailScreen from '../Screens/DetailScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          
          name="   "
          component={HomeScreen}
          // options={{title: 'Home'}}
        />
        {/* <Stack.Screen name=" " component={OnboardingScreen} /> */}
        <Stack.Screen name="Homee" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="profil" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};

export default Navigation;
