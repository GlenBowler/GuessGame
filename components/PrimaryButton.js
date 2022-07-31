import React from 'react'
import {View,Text,StyleSheet,Pressable} from 'react-native';

function PrimaryButton(props) {
    function pressHandler(){
        props.onPress();
    }

    return(
        <Pressable onPress={pressHandler} >
        <View style={styles.container}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#72063c',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        margin:4,
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
})

export default PrimaryButton