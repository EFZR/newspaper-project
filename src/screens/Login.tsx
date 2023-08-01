import React, { FC, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { authenticateUser } from "../api/users";
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
  const { setIsLogged } = useAuth();

  const authentication = async () => {
    if (email === "" || password === "") {
      setError("Please fill all the fields");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const data = await authenticateUser(email);
    if (data.length > 0) {
      if (data[0].password === password) {
        setIsLogged(true);
      } else {
        setError("Password is incorrect");
        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } else {
      setError("User not found");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };


  return (
    <View style={styles.container}>
      {error !== "" && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.header}>SIGN IN</Text>
      <TextInput
        style={[styles.input, focusEmail && styles.input_active]}
        placeholder="email"
        onFocus={() => setFocusEmail(true)}
        onBlur={() => setFocusEmail(false)}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, focusPassword && styles.input_active]}
        placeholder="password"
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button_end}>
        <Text style={styles.text_end}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_principal} onPress={
        () => authentication()
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