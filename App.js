import { FlatList, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={styles.text}>Responive with flex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 45,
    fontSize: 40,
    textAlign: "center",
  },
});

export default App;
