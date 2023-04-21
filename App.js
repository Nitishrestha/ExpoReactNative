import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import users from "./Data";

export default function App() {
  return (
    <View>
      <Text style={styles.text}>Section List is React Native</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, marginLeft: 25 }}>{item}</Text>
        )}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 25, color: "red" }}>{name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 45,
    fontSize: 30,
    textAlign: "center",
  },
});
