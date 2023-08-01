import React, { FC, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../components/AuthContext";
import styles from "../styles/login";

interface Props {
  navigation: StackNavigationProp<any>;
}

export const Login: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [focusEmail, setFocusEmail] = useState<boolean>(false)
  const [focusPassword, setFocusPassword] = useState<boolean>(false)
  const { isLogged, setIsLogged } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SIGN IN</Text>
      <TextInput
        style={[styles.input, focusEmail && styles.input_active]}
        placeholder="email"
        onFocus={() => setFocusEmail(true)}
        onBlur={() => setFocusEmail(false)}
      />
      <TextInput
        style={[styles.input, focusPassword && styles.input_active]}
        placeholder="password"
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
      />
      <TouchableOpacity style={styles.button_end}>
        <Text style={styles.text_end}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_principal} onPress={
        () => {
          setIsLogged(true)
        }
      }>
        <Text style={styles.text_principal}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}
        style={styles.button_center}
      >
        <Text style={styles.text_center}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Login;