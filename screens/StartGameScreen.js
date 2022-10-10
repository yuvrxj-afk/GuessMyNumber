import { TextInput, View, StyleSheet, Alert ,Text} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler(){
    setEnteredNumber('');
  }

  function confirmInputHandler(){
    const chosenNumber=parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <= 0 ||chosenNumber > 99 ){
      Alert.alert('Invalid Number !',
      'Number has to be a number between 1 and 99.',
      [{text:'Okay',style:'destructive', onPress: resetInputHandler}]
      );
      return ;
    }
    onPickNumber(chosenNumber);
  }

  return ( 
    <View style ={styles.rootContainer}>
    <Title >Guess MY Number</Title>
    
    <Card>
    <Text style={styles.instructionText}>Enter A Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={5}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  instructionText:{
    color:Colors.accent500,
    fontSize:24,
  },
  numberInput: {
    height: 50,
    width: 100,
    fontSize: 30,
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
