import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

// config
import { auth } from "../config/firebase-config";

// navigations
import AuthNavigator from "./AuthNavigator";
import MainNavigator from "./MainNavigator";

// Components
import Loader from "../components/Loader";

const AppNavigator = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  if (initializing) return <Loader />;

  return (
    <NavigationContainer>
      {!user ? <AuthNavigator /> : <MainNavigator user={user} />}
    </NavigationContainer>
  );
};

export default AppNavigator;
