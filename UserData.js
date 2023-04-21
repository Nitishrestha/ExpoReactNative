import { View, Text } from "react-native";
import Styles from "./Styles";

export default UserData = (props) => {
  const styles = Styles;
  const item = props.user;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
