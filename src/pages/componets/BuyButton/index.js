import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
export default function Button({ onClick }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={onClick}>
                <Text style={styles.title}>COMPRAR</Text>
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
        width: '80%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 17,
        color: '#FFF'
    }
});
