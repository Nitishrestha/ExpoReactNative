import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const App = () => {
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
            title: "User Login",
            headerStyle: {
              backgroundColor: "orange",
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
