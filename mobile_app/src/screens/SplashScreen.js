import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🇸🇸 National Secure Comms</Text>
      <Text style={styles.subtitle}>Protecting National Security</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#003366" },
  title: { fontSize:22, color:"#fff", fontWeight:"bold" },
  subtitle: { fontSize:14, color:"#fff" }
});