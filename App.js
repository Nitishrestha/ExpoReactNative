import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View, Modal } from "react-native";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Dialog box in react native</Text>

      <Modal transparent={true} visible={show} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello All</Text>
            <Button title="Close Modal" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShow(true)}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 45,
    fontSize: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "#bd5734",
  },
  mainView: { flex: 1 },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centeredView: { flex: 1, justifyContent: "center", alignItems: "center" },
  modalView: {
    backgroundColor: "red",
    padding: 30,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 5,
    marginTop: 100,
  },
  modalText: { fontSize: 20, marginBottom: 20 },
});

export default App;
