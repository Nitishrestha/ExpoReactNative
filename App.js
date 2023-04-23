import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Touchable highlight n opacity</Text>
      <TouchableHighlight>
        <Text style={[styles.button, styles.delete]}>Delete</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.primary]}>Primary</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.warn]}>Warn</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button, styles.error]}>Error</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 45,
    fontSize: 25,
    height: 70,
    textAlign: "center",
    color: "white",
    paddingTop: 15,
    backgroundColor: "#bd5734",
  },
  button: {
    backgroundColor: "#87bdd8",
    color: "white",
    height: 50,
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    margin: 15,
    borderRadius: 10,
    shadowColor: "red",
    elevation: 10,
    shadowOpacity: 0.5,
  },
  delete: { backgroundColor: "#c83349", color: "white" },
  primary: { backgroundColor: "#b8a9c9", color: "white" },
  success: { backgroundColor: "#96ceb4", color: "white" },
  warn: { backgroundColor: "#d96459", color: "white" },
  error: { backgroundColor: "#622569", color: "white" },
});

export default App;
