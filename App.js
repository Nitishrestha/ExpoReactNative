import { FlatList, Text, View } from "react-native";
import Styles from "./Styles";

import users from "./Data";

import UserData from "./UserData";

export default function App() {
  return (
    <View>
      <Text style={styles.text}> Component in Loop with Flatlist </Text>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserData user={item} />}
      />
    </View>
  );
}

const styles = Styles;
