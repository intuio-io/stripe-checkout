import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import * as Linking from "expo-linking";

// screens
import Home from "../screens/Home";
import Success from "../screens/Success";

// constants
import colors from "../constants/colors";

const Stack = createStackNavigator();

const MainNavigator = ({ user }) => {
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const handleDeepLinkEvent = (event) => {
      const data = Linking.parse(event.url);
      setData(data);
      console.log(data);
    };

    // Handle the initial URL
    Linking.getInitialURL().then((initialURL) => {
      if (initialURL) {
        const data = Linking.parse(initialURL);
        setData(data);
        console.log(data);
      }
    });

    // Listen for subsequent deep link events
    const subscription = Linking.addEventListener("url", handleDeepLinkEvent);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (data && data.path === "success") {
      navigation.navigate("Success");
    }
  }, [data, navigation]);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerStyle: { shadowColor: colors.grey, height: 100 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home" }}
        initialParams={{ userId: user?.uid }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{ title: "Payment Completed" }}
        initialParams={{ userId: user?.uid }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
