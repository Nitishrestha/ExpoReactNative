import { FlatList, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const App = () => {
  return (
    <View style={{ flex: 1, marginTop: 40 }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="About" component={SignUp} />
          <Tab.Screen name="Contact" component={SignUp} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
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
