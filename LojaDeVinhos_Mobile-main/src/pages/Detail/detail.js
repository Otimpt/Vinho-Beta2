import React, { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../componets/BuyButton';
import Footer from '../componets/Footer';

export default function Detail({ route, navigation }) {

    const { item, imagem } = route.params || {};

    useLayoutEffect(() => {
      if (item) {
        navigation.setOptions({
          headerTitle: item.nome,
        });
      }
    }, [navigation, item]);

    if (!item || !imagem) {
        return (
          <View>
            <Text>Nenhum item ou imagem encontrada.</Text>
          </View>
        );
    }

    const navigateToPurchase = () => {
      navigation.navigate('Purchase', {item, imagem});
    };

    return(
        <ScrollView style={styles.container}>
            <Image
            source={imagem}
            style={styles.image}
            />

            <View>
                <View>
                    <Text style={[styles.title, {fontSize:24}]}>{item.cost}</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize:30}]}>{item.nome}</Text>
                </View>
            </View>

            <View style={styles.textContent}>
                <Text style={styles.textTitle}>
                    {item.nome}
                </Text>
                <Text style={styles.textContent}>
                    Descrição: {item.desc}
                </Text>
                <Text style={styles.textList}>
                    Ano - {item.ano}
                </Text>
                <Text style={styles.textList}>
                    Nacionalidade - {item.nacionalidade}
                </Text>
            </View>

            <Button onClick={() => navigateToPurchase()}/>

            <View style={styles.line}></View>

            <Footer/>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor:  '#FFF',
    },
    image:{
        width: '100%'
    },
    title:{
        fontFamily: 'Inter_400Regular',
        paddingHorizontal: '2%',
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },
    textList:{
        fontSize: 16,
        lineHeight: 25,
        paddingHorizontal: '2%'
    },
    Line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }
})