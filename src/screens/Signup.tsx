import React, { FC, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useAuth } from "../components/AuthContext";
import { createId } from "../utils/helpers";
import { createUser } from "../api/users";
import styles from "../styles/login";

interface Props {
  navigation: StackNavigationProp<any>;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const Signup: FC<Props> = ({ navigation }) => {
  const [name, setName] = useState<string>("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [focusName, setFocusName] = useState<boolean>(false)
  const [focusSurname, setFocusSurname] = useState<boolean>(false)
  const [focusEmail, setFocusEmail] = useState<boolean>(false)
  const [focusPassword, setFocusPassword] = useState<boolean>(false)
  const { setIsLogged } = useAuth();

  const handleSignup = async () => {
    if (!name || !surname || !email || !password) {
      setError("Please fill all the fields");
      return;
    }
    const id = createId();
    const user = { id, name, surname, email, password };
    createUser(user);
    setIsLogged(true);
  }

  return (
    <View style={styles.container}>
      {error !== "" && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.header}>SIGN UP</Text>
      <TextInput
        style={[styles.input, focusName && styles.input_active]}
        placeholder="Name"
        onFocus={() => setFocusName(true)}
        onBlur={() => setFocusName(false)}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, focusSurname && styles.input_active]}
        placeholder="Surname"
        onFocus={() => setFocusSurname(true)}
        onBlur={() => setFocusSurname(false)}
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={[styles.input, focusEmail && styles.input_active]}
        placeholder="Email"
        onFocus={() => setFocusEmail(true)}
        onBlur={() => setFocusEmail(false)}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, focusPassword && styles.input_active]}
        placeholder="Password"
        onFocus={() => setFocusPassword(true)}
        onBlur={() => setFocusPassword(false)}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button_principal} onPress={() => handleSignup()}>
        <Text style={styles.text_principal}>CREATE & LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_center}
      >
        <Text style={styles.text_center} onPress={() => navigation.navigate('Login')}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Signup;