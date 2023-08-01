import "react-native-gesture-handler";
import React, { useState, useContext, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./src/components/AuthContext";
import Routes from "./src/routes/routes";
import LoginRoutes from "./src/routes/loginRoutes";

export default function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      <NavigationContainer>
        {
          isLogged ? <Routes /> : <LoginRoutes />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
