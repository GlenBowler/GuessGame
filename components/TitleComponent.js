import React from 'react'
import {Text,View,StyleSheet} from 'react-native';

function TitleComponent(props) {
  return (
    <View>
    <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default TitleComponent

const styles=StyleSheet.create({

    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        padding:12,
        borderColor:'white'
    },

})