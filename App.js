import { FlatList, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Main Page</Text>
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
});

export default App;
