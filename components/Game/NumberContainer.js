import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

function NumberContainer(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{props.guess}</Text>
    </View>
  )
}

export default NumberContainer

const styles =StyleSheet.create({
    container:{
        borderWidth:4,
        padding:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginTop:12,
        borderColor:'#ddb52f'
    },
    numberText:{
        color:'#ddb52f',
        fontSize:36,
        fontWeight:'bold'
    }
})