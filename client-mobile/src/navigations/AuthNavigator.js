import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import GetStarted from "../screens/GetStarted";
import SignIn from "../screens/SignIn";

// Stack Navigator
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => <StackNavigator />;

export default AuthNavigator;
