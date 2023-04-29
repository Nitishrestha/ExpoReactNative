import { Button, Text, View } from "react-native";

export const Home = (props) => {
  const { name, age } = props.route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>Home Page</Text>
      <Button
        title="Go to Contact Page"
        onPress={() => props.navigation.navigate("ContactUs")}
      ></Button>
    </View>
  );
};
