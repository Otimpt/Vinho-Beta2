import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Button(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={props.onClick}>
                <Text style={styles.text}>
                    {props.children}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer:{
        padding: 5,
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize: 17,
        color: '#17181a'
    }
});