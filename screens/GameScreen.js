import { View, Text, StyleSheet, Alert } from "react-native";
import TitleComponent from "../components/TitleComponent";
import { useEffect, useState } from "react";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import {Ionicons} from '@expo/vector-icons';

function generateRandomNumber(min, max, exclude) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen(props) {
  const [rounds,setRounds] = useState([initailGuess])
  const initailGuess = generateRandomNumber(
    1,
    100,
    props.userNumber
  );
  const [currrentGuess, setCurrentGuess] = useState(initailGuess);

  useEffect(()=>{
    if(currrentGuess == props.userNumber){
      props.gameOver(rounds.length);
    }
  },[currrentGuess,props.userNumber,props.gaveOver]);

  useEffect(()=>{
    minBoundry=1;
    maxBoundry=100;
  },[]);

  function nextGuessHandler(direction) {
    
    if (
      (direction === "lower" && currrentGuess < props.userNumber) ||
      (direction === "higher" && currrentGuess > props.userNumber)
    ) {
      Alert.alert("Dont lie!", "We know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currrentGuess;
    } else if (direction == "higher") {
      minBoundry = currrentGuess + 1;
    }
    const newRandomNumb = generateRandomNumber(
      minBoundry,
      maxBoundry,
      currrentGuess
    );
    setCurrentGuess(newRandomNumb);
    setRounds(prevGueses=>[...prevGueses,newRandomNumb]);
  }
  return (
    <View style={styles.gameScreenContainer}>
      <TitleComponent title="Oponent Guess" />
      <NumberContainer guess={currrentGuess} />
      <View style={styles.highLowerContainer}>
        <Text style={styles.highLowerContainer}>{"Higher or Lower"}</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="md-add" size={24} color={'white'}/>
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={'white'}/>
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 12,
  },

  highLowerContainer: {
    alignContent: "center",
    textAlign: "center",
    padding: 12,
    color:'white'
  },
});
