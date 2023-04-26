import { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const App = () => {
  const [show, setShow] = useState(false);

  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Activity Indicator</Text>
      <View style={styles.loading}>
        <ActivityIndicator
          size={90}
          color={"#bd5734"}
          animating={show}
        ></ActivityIndicator>
        <Button title="Show loader" onPress={() => displayLoader()}></Button>
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
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
