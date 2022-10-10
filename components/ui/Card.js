import {StyleSheet,View } from 'react-native';
import Colors from '../../constants/color';

function Card(children){
    return <View style ={StyleSheet.Card}>{children}</View>
}

export default Card;
const styles = StyleSheet.create({
    Card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 25,
        borderRadius: 6,
        padding: 15,
        backgroundColor: Colors.primary800,
        elevation: 10,
        shadowColor: "cyan",
      },
})