import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>⚙ Settings</Text>
      <Button title="Verify Device" onPress={() => alert("Device verified (demo)")} />
      <Button title="Switch to GovCloud Mode" onPress={() => alert("Switched to GovCloud (demo)")} />
      <Button title="Enable Offline Mesh" onPress={() => alert("Mesh Mode Enabled (demo)")} />
    </View>
  );
}