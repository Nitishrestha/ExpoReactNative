import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(() => {
  //   console.warn("Data updated... so displaying... data: ", data);
  // }, [data]);

  // useEffect(() => {
  //   console.warn("Count updated... so displaying... count: ", count);
  // }, [count]);

  return (
    <View>
      <Text style={styles.title}>Use effect in React Native</Text>
      <Text style={styles.text}>Count : {count}</Text>
      <Text style={styles.text}>Data: {data}</Text>
      <Button title="update Count" onPress={() => setCount(count + 1)}></Button>
      <Button title="update Data" onPress={() => setData(data + 1)}></Button>
      <NewComponent info={{ data, count }} />
    </View>
  );
}

const NewComponent = (props) => {
  const data = props.info.data;
  const count = props.info.count;

  useEffect(() => {
    console.warn("from new component...data has changed");
  }, [data]);

  useEffect(() => {
    console.warn("from new component...count has changed");
  }, [count]);

  return (
    <View>
      <Text style={styles.title}>This is a new component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 45,
    fontSize: 40,
    textAlign: "center",
  },
  text: {
    fontSize: 30,
  },
});
