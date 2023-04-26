import { FlatList, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Dynamic Radio Button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 45,
    fontSize: 36,
    color: "white",
    textAlign: "center",
    backgroundColor: "#bd5734",
    padding: 5,
  },
});

export default App;
