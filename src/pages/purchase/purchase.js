import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';
import PaymentButton from '../componets/PaymentButton/index';

const db = SQLite.openDatabase({ name: 'ComprasFeitas.db', createFromLocation: '~ComprasFeitas.db' });
function filtroDesc(desc){
  if(desc.length < 27){
      return desc;
  }

    return `${desc.substring(0, 18)}...`;
}

export default function Purchase({ route, navigation}){
    const { item, imagem } = route.params || {};

    if (!item || !imagem) {
        return (
          <View>
            <Text>Nenhum item ou imagem encontrada.</Text>
          </View>
        );
    }
    navigation.setOptions({
        headerTitle: 'Carrinho'
    });

    const navigateToPayment = () => {
      navigation.navigate('Payment', {item, imagem});
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Meu carrinho</Text>
                </View>

                <View style={styles.line}></View>

                <View style={styles.linha}>
                  <Image
                  source={imagem}
                  style={styles.image}
                  />

                  <View>
                      <View>
                          <Text style={styles.title}>{filtroDesc(item.nome)}</Text>
                      </View>
                      <View opacity={0.4}>
                          <Text style={styles.title}>{filtroDesc(item.desc)}</Text>
                      </View>
                  </View>
                    <View>
                      <Text style={[styles.title, { alignSelf: 'flex-start' }]}>
                      {item.cost}
                      </Text>
                    </View>
                </View>

                <View style={styles.line}></View>

                <View style={styles.payment}>
                  <PaymentButton style={styles.paymentButton} onClick={() => navigateToPayment()}></PaymentButton>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'
    },
    header:{
      flex: 1,
      marginBottom:8
    },
    linha:{
      flexDirection: 'row',
      height: '20%',
      marginHorizontal: '2%'
    },
    image:{
      height: '90%',
      width: '40%',
      marginRight: '2%'
    },
    textContainer:{
        flexDirection:'row',
        marginVertical:'5%',
        marginHorizontal:'5%'
    },
    text:{
        fontFamily:'Inter_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        width: '100%',
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    },
    payment: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      marginBottom: 20,
    },
    paymentButton: {
      alignSelf: 'center',
    },
});
