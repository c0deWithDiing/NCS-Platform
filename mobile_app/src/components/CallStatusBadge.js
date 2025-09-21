import React, { useState } from "react";
import { View, Button } from "react-native";
import CallStatusBadge from "../components/CallStatusBadge";

export default function CallScreen() {
  const [active, setActive] = useState(false);

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <CallStatusBadge status={active ? "active" : "idle"} />
      <Button
        title={active ? "End Call" : "Start Secure Call"}
        onPress={() => setActive(!active)}
      />
    </View>
  );
}