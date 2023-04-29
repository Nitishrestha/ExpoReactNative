import { FlatList, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View style={styles.login}>
      <Text style={styles.text}>Login </Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={styles.signup}>
      <Text style={styles.text}>SignUp </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 40,
    color: "white",
    textAlign: "center",
    backgroundColor: "#bd5734",
  },
  signup: { flex: 1, justifyContent: "center", alignItems: "center" },
  login: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 40, textAlign: "center" },
});

export default App;
