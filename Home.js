import { Button, Text, View } from "react-native";

export const Home = (props) => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home Page</Text>
      <Button
        title="Go to Contact Page"
        onPress={() => props.navigation.navigate("ContactUs")}
      ></Button>
    </View>
  );
};
