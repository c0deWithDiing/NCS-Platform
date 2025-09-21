import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [id, setId] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = () => {
    if (id && pin) {
      navigation.replace("Home");
    } else {
      alert("Enter ID and PIN");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Login</Text>
      <TextInput
        placeholder="Secure ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />
      <TextInput
        placeholder="PIN"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", padding:20 },
  title: { fontSize:22, marginBottom:20, textAlign:"center" },
  input: { borderWidth:1, borderColor:"#ccc", marginBottom:10, padding:8 }
});