import { FlatList, StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

const App = () => {
  return (
    <View style={styles.title}>
      <WebView
        source={{ uri: "https://reactnative.dev/docs/next/pressable" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    marginTop: 40,
    fontSize: 40,
    color: "white",
    textAlign: "center",
    backgroundColor: "#bd5734",
  },
});

export default App;
