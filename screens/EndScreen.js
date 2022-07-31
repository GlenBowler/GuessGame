import {Text,View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function EndScreen(props) {

  return (
    <View style={styles.startContainer}>    
      <Text style={styles.textOutput}>We got your number {props.userNum}</Text>
      <Text style={styles.textOutput}>After trying : {props.counter}</Text>
      <View style={styles.resetBut}>
      <PrimaryButton onPress={props.reset}>Retry</PrimaryButton>
      </View>
    </View>

  )
}

export default EndScreen

const styles = StyleSheet.create({
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
  textOutput:{
    color:'white'
  },
  resetBut:{
    marginTop:10,
    width:'100%'
  }
})