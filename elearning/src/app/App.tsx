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
import { FeaturedTabIcon } from 'components/FeaturedTabIcon';
import { SearchTabIcon } from 'components/SearchTabIcon';
import { MyCourseTabIcon } from 'components/MyCourseTabIcon';
import { FavTabIcon } from 'components/FavTabIcon';
import { ProfileTabIcon } from 'components/ProfileTabIcon';
import { ChangePasswordScreen } from 'containers/ChangePasswordScreen';
import { HelpAndAbout } from 'containers/HelpAndAbout';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    lazy
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Feature"
      component={FeatureScreen}
      options={{ tabBarIcon: FeaturedTabIcon }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{ tabBarIcon: SearchTabIcon }}
    />
    <Tab.Screen
      name="MyCourses"
      component={MyCoursesScreen}
      options={{ tabBarIcon: MyCourseTabIcon }}
    />
    <Tab.Screen
      name="Fav"
      component={FavoriteScreen}
      options={{ tabBarIcon: FavTabIcon }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ tabBarIcon: ProfileTabIcon }}
    />
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
        <Stack.Screen
          name="CP"
          component={ChangePasswordScreen}
          options={{ title: 'Password Change' }}
        />
        <Stack.Screen
          name="HandA"
          component={HelpAndAbout}
          options={{ title: 'Help and About' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
