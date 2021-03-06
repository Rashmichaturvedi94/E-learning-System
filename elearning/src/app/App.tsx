import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from 'containers/LoginScreen';
import { CreateAccountScreen } from 'containers/CreateAccountScreen';
import { PersonalInfoScreen } from 'containers/PersonalInfoScreen';
import { ForgotPasswordScreen } from 'containers/ForgotPasswordScreen';
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
import { About } from 'containers/About';
import { CourseDetailsScreen } from 'containers/CourseDetailsScreen';
import { CourseStackScreen } from 'Navigation/CourseStack';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { QueryClient, QueryClientProvider } from 'react-query';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const queryClient = new QueryClient();

const TabNavigator = () => (
  <Tab.Navigator
    lazy
    tabBarOptions={{
      showLabel: false,
    }}
  >
    <Tab.Screen
      name="Feature"
      component={CourseStackScreen}
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
    <QueryClientProvider client={queryClient}>
      <ActionSheetProvider>
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
              options={{ title: 'Help' }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ title: 'About' }}
            />
            <Stack.Screen
              name="CourseDetails"
              component={CourseDetailsScreen}
              options={{ title: 'Course Contents' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ActionSheetProvider>
    </QueryClientProvider>
  );
};
