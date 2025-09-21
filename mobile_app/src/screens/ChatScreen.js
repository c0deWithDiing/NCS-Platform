import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMsg = { id: Date.now(), text: input, sender: "You" };
    setMessages([...messages, newMsg]);
    setInput("");
  };

  return (
    <View style={{flex:1, padding:10}}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text>{item.sender}: {item.text}</Text>
        )}
      />
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Type secure message..."
        style={{borderWidth:1, borderColor:"#ccc", marginBottom:5, padding:8}}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}