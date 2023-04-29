import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.title}>Custom Modal</Text>
      </View>
      {show ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text>Hello World</Text>
            <Button title="Close" onPress={() => setShow(false)}></Button>
          </View>
        </View>
      ) : null}
      <Button title="Open dialog" onPress={() => setShow(true)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, justifyContent: "flex-start" },
  title: {
    marginTop: 40,
    fontSize: 40,
    color: "white",
    textAlign: "center",
    backgroundColor: "#bd5734",
  },
  container: { flex: 1, justifyContent: "flex-end" },
  modal: {
    flex: 1,
    backgroundColor: "rgba(50, 50, 50, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "white",
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 10,
  },
});

export default App;
