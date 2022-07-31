import React,{useState} from "react";
import { TextInput, View, StyleSheet, Alert,Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import TitleComponent from "../components/TitleComponent";
import GameScreen from "./GameScreen";

function StartScreen(props) {
  const [enteredNumber,setEnteredNumber] = useState('');


  function numberInputHandler(enteredText){
   setEnteredNumber(enteredText)
  }
  function resetInput(){
    setEnteredNumber('')
  }

  function confirmedInputValue(){
    const chooseNumber = parseInt(enteredNumber);
    if(isNaN(chooseNumber) || chooseNumber<=0 || chooseNumber>99){
      Alert.alert('Invalid number',"Number has to be a number between 1-99",[{text:'Okay',style:'destructive',onPress: resetInput}]);
      return;
    }
    props.onPickNumber(enteredNumber);
  }
  return (
    <View style={styles.rootContainer}>
    <TitleComponent title={"Guess my Number"}/>
    <View style={styles.startContainer}>
      <Text style={styles.textStyling}>Please enter your number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <PrimaryButton onPress={confirmedInputValue}>Submit</PrimaryButton>
        </View>
        <View style={styles.button}>
        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  textStyling:{
    color:'white',
    fontSize:24
  },
  startContainer: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 100,
    backgroundColor: "#3b021f",
    //Shadow for andriod
    elevation: 4,
    //Shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent:'center',
    alignItems:'center'
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    width: "20%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button:{
    flex:1
  }
});

export default StartScreen;
