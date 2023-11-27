import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import vinho from '../../objects/item.json';
import Itens from '../Itens';

import vinhoImg1 from '../../assets/vinho1.webp';
import vinhoImg2 from '../../assets/vinho2.webp';
import vinhoImg3 from '../../assets/vinho3.jpg';
import vinhoImg4 from '../../assets/vinho4.webp';

export default function Footer(){

    const navigation = useNavigation();
    const navigateToDetail = (item, imagem) => {
        navigation.navigate('Detail', { item, imagem });
    };

    const vinho1 = vinho.vinho1;
    const vinho2 = vinho.vinho2;
    const vinho3 = vinho.vinho3;
    const vinho4 = vinho.vinho4;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginHorizontal: 10}}>
                        <Itens
                            item={vinho1}
                            img={vinhoImg1}
                            onClick={() => navigateToDetail(vinho1, vinhoImg1)}>
                            {vinho1.nome}
                        </Itens>

                        <Itens
                            item={vinho2}
                            img={vinhoImg2}
                            onClick={() => navigateToDetail(vinho2, vinhoImg2)}>
                            {vinho2.nome}
                        </Itens>

                        <Itens
                            item={vinho3}
                            img={vinhoImg3}
                            onClick={() => navigateToDetail(vinho3, vinhoImg3)}>
                            {vinho3.nome}
                        </Itens>
                        <Itens
                            item={vinho4}
                            img={vinhoImg4}
                            onClick={() => navigateToDetail(vinho4, vinhoImg4)}>
                            {vinho4.nome}
                        </Itens>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 24,
        fontFamily:  'Inter_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
});