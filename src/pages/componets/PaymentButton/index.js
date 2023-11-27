import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentButton({ onClick }){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={onClick}>
                <Text style={styles.title}>PAGAMENTO</Text>
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
        width: '100%',
        height: 50,
        padding: 5,
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