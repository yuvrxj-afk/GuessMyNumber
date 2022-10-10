import { Text ,StyleSheet} from "react-native";
import Colors from "../../constants/color";
function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
    
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  }
})