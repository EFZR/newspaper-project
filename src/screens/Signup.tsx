import React, { FC, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../styles/login";

interface Props {
  navigation: StackNavigationProp<any>;
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SIGN UP</Text>
      <TextInput
        style={[styles.input, focusName && styles.input_active]}
        placeholder="name"
        onFocus={() => setFocusName(true)}
        onBlur={() => setFocusName(false)}
      />
      <TextInput
        style={[styles.input, focusSurname && styles.input_active]}
        placeholder="surname"
        onFocus={() => setFocusSurname(true)}
        onBlur={() => setFocusSurname(false)}
      />
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
      <TouchableOpacity style={styles.button_principal}>
        <Text style={styles.text_principal}>LOG IN</Text>
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