import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const App = () => {
  const leftFunction = () => console.warn("Left Button Pressed");
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "lightblue",
          },
          headerTitleStyle: { fontSize: 25 },
          headerTintColor: "black",
        }}
      >
        <Stack.Screen
          name="LogIn"
          component={Login}
          options={{
            headerTitle: () => <Button title="Left" onPress={leftFunction} />,
            // headerRight: () => <Button title="Right" />,
            headerRight: () => <RightComponent />,
            title: "User Login",
            headerStyle: {
              backgroundColor: "lightgreen",
            },
            headerTitleStyle: { fontSize: 30 },
            headerTintColor: "black",
          }}
        />
        <Stack.Screen name="ContactUs" component={ContactPage} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RightComponent = () => {
  const rightFunction = () => console.warn("Right Button Pressed");
  return <Button title="Right" onPress={rightFunction} />;
};

const Login = (props) => {
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

const Home = (props) => {
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

const ContactPage = (props) => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Contact Page</Text>
      <Button
        title="Logout"
        onPress={() => props.navigation.navigate("LogIn")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  home: { flex: 1, justifyContent: "center", alignItems: "center" },
  homeText: { fontSize: 30, marginBottom: 20 },
});

export default App;
