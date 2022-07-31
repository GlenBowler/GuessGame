import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import EndScreen from "./screens/EndScreen";

export default function App() {
  const [userNumber,setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] =useState(true);
  const [counter,setCounter] = useState(0)

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function reset(){
    setCounter(0);
    setUserNumber(null);
  }
  function gameOver(numberofRounds){
    setGameIsOver(true);
    setCounter(numberofRounds);
  }

  let screen = <StartScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen=<GameScreen userNumber={userNumber} gameOver ={gameOver}/>
  }

  if (gameIsOver && userNumber){
    screen=<EndScreen userNum = {userNumber} reset={reset} counter={counter}/>
  }
  
  return (
    
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      
      </ImageBackground>
    </LinearGradient>
  
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
