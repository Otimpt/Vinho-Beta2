import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'ComprasFeitas.db', createFromLocation: '../assets/ComprasFeitas.db' });

export default function PaymentButton({ onClick }) {
  const handlePayment = () => {
    const itemComprado = "Item comprado"; // Item que foi comprado
    adicionarItem(itemComprado)
      .then(() => {
        console.log('Item adicionado ao banco de dados');
        onClick(); // Chama a função onClick passada como propriedade
      })
      .catch((error) => console.log('Erro ao adicionar item', error));
  };

  const adicionarItem = (item) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO compras (item) VALUES (?)',
          [item],
          () => resolve(),
          (error) => reject(error)
        );
      });
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer} onPress={handlePayment}>
        <Text style={styles.title}>Efetuar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContainer: {
    width: '100%',
    height: 50,
    padding: 5,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 17,
    color: '#FFF'
  }
});
