import { FlatList, StyleSheet, Text, View } from "react-native";

import users from "./Data";

export default function App() {
  return (
    <View>
      <Text style={styles.text}>Main Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 40,
    fontSize: 40,
  },
});
