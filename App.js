import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={styles.text}>Main Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 45,
    fontSize: 40,
    textAlign: "center",
  },
});
