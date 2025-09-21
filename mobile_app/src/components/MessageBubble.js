import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageBubble({ text, sender }) {
  const isUser = sender === "You";
  return (
    <View style={[styles.bubble, isUser ? styles.user : styles.other]}>
      <Text style={{ color:"#fff" }}>{sender}: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: { padding:10, marginVertical:5, borderRadius:10, maxWidth:"80%" },
  user: { backgroundColor:"#003366", alignSelf:"flex-end" },
  other: { backgroundColor:"#555", alignSelf:"flex-start" }
});