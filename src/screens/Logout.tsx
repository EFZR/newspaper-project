import React, { useEffect } from "react";
import { useAuth } from "../components/AuthContext";
import { View } from "react-native";

const Logout = () => {
  const { setIsLogged } = useAuth();
  useEffect(() => {
    setIsLogged(false);
  }, []);
  return <View />;
}

export default Logout;