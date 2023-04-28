import { useState } from "react";
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  const [show, setShow] = useState(false);
  const [barStyle, setbarStyle] = useState("default");

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={styles.title}>Status Bar</Text>
      </View>
      <View>
        <StatusBar
          backgroundColor={"lightgreen"}
          barStyle={barStyle}
          hidden={show}
        ></StatusBar>
      </View>
      <View style={{ flex: 1, justifyContent: "center", margin: 20 }}>
        <Button title="Toggle" onPress={() => setShow(!show)}></Button>

        <Button
          title="Update to dark"
          onPress={() => setbarStyle("dark-content")}
        ></Button>

        <Button
          title="Update to light"
          onPress={() => setbarStyle("light-content")}
        ></Button>
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
});

export default App;
