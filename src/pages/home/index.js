import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'ComprasFeitas.db', createFromLocation: '~ComprasFeitas.db' });

import Button from '../componets/Button';
import Itens from '../componets/Itens';

import vinho from '../objects/item.json';

import vinhoImg1 from '../assets/vinho1.webp';
import vinhoImg2 from '../assets/vinho2.webp';
import vinhoImg3 from '../assets/vinho3.jpg';
import vinhoImg4 from '../assets/vinho4.webp';

export default function Home() {
  const navigation = useNavigation();
  const navigateToDetail = (item, imagem) => {
    navigation.navigate('Detail', { item, imagem });
  };

  useEffect(() => {
    initDatabase();
  }, []);

  const initDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS compras (id INTEGER PRIMARY KEY AUTOINCREMENT, item TEXT)',
        [],
        () => console.log('Tabela criada com sucesso'),
        (error) => console.log('Erro ao criar tabela', error)
      );
    });
  };

  const vinho1 = vinho.vinho1;
  const vinho2 = vinho.vinho2;
  const vinho3 = vinho.vinho3;
  const vinho4 = vinho.vinho4;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/vinhos_banner.jpg')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Sua melhor loja de vinhos</Text>
        </View>

        <View style={styles.buttons}>
          <Button onClick={() => navigation.navigate('Nationality')}>
            Nacionalidades
          </Button>
          <Button onClick={() => navigation.navigate('Harvest')}>
            Safras
          </Button>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Promoção</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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

          <View style={styles.line}></View>

          <Text style={styles.text}>Lançamentos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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

          <View style={styles.line}></View>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header: {
    marginBottom: 8
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20%'
  },
  image: {
    width: '100%',
    height: '30%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  text: {
    fontFamily: 'Inter_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    marginTop: '5%'
  },
  Line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
});
