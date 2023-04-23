import { FlatList, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Responive with flex</Text>

      <View style={styles.view2}></View>
      <View style={styles.view3}>
        <View style={styles.view3a}></View>
        <View style={styles.view3b}></View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4a}></View>
        <View style={styles.view4b}></View>
        <View style={styles.view4c}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 45,
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#dbceb0",
  },
  view2: { flex: 1, backgroundColor: "#b9936c" },
  view3: { flex: 1, backgroundColor: "orange", flexDirection: "row" },
  view4: { flex: 1, backgroundColor: "yellow" },
  view3a: { flex: 1, backgroundColor: "#d5e1df", margin: 5 },
  view3b: { flex: 1, backgroundColor: "#e3eaa7", margin: 5 },
  view4a: { flex: 1, backgroundColor: "#6b5b95", margin: 2 },
  view4b: { flex: 1, backgroundColor: "#d64161", margin: 2 },
  view4c: { flex: 1, backgroundColor: "#b2ad7f", margin: 2 },
});

export default App;
