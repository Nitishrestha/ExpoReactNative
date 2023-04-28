import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={styles.title}>Pressable</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Pressable
          onPress={() => console.warn("On normal press")}
          onLongPress={() => console.warn("on long press")}
          onPressIn={() => console.warn("on press in")}
          onPressOut={() => console.warn("on press out")}
        >
          <Text style={styles.pressableBtn}>Press</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 45,
    fontSize: 40,
    color: "white",
    textAlign: "center",
    backgroundColor: "#bd5734",
  },
  pressableBtn: {
    alignContent: "center",
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    margin: 10,
    fontSize: 20,
    textAlign: "center",
    borderRadius: 20,
    shadowColor: "black",
    elevation: 5,
  },
});

export default App;
