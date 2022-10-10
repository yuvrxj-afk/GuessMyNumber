import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/color";

function NumberContainer({children}){
    return (
        <View style = {styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>

    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderRadius:8,
        borderWidth:4,
        margin:24,
        padding:24,
        borderColor:Colors.accent500,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
    color: Colors.accent500,
    fontSize:36,
    fontWeight:'bold'
    }

})