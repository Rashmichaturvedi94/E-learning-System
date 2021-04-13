import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from 'containers/LoginScreen';
import { CreateAccountScreen } from 'containers/CreateAccountScreen';
import { PersonalInfoScreen } from 'containers/PersonalInfoScreen';
import { ForgotPasswordScreen } from 'containers/ForgotPasswordScreen';
import { FeatureScreen } from 'containers/FeatureScreen';
import { SearchScreen } from 'containers/SearchScreen';
import { FavoriteScreen } from 'containers/FavoriteScreen';
import { MyCoursesScreen } from 'containers/MyCoursesScreen';
import { ProfileScreen } from 'containers/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feature" component={FeatureScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="MyCourses" component={MyCoursesScreen} />
    <Tab.Screen name="Fav" component={FavoriteScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
);

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalInfo"
          component={PersonalInfoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FP"
          component={ForgotPasswordScreen}
          options={{ title: 'Password Reset' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
