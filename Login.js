import { Button, Text, View } from "react-native";

export const Login = (props) => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Login Page</Text>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate("Home")}
      ></Button>
    </View>
  );
};
