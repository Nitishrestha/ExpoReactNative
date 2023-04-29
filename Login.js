import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const Login = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Login Page</Text>
      <TextInput
        placeholder="Enter your name"
        style={{ fontSize: 20, borderBottomColor: "black", marginBottom: 10 }}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Enter your age"
        style={{ fontSize: 20, borderBottomColor: "black", marginBottom: 10 }}
        onChangeText={(text) => setAge(text)}
      />
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate("Home", { name, age })}
      ></Button>
    </View>
  );
};
