import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'ComprasFeitas.db', createFromLocation: '../assets/ComprasFeitas.db' });
export default function PaymentSuccess({ route, navigation }){
    const { item } = route.params || {};

    if (!item) {
        return (
          <View>
            <Text>Nenhum item encontrado.</Text>
          </View>
        );
    }
    navigation.setOptions({
      headerShown: false,
      //headerTitle: 'Pagamento bem sucedido'
    });

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.successText}>Pagamento realizado com sucesso!</Text>
      {item && <Text style={styles.itemText}>Item comprado: {item.nome}</Text>}
      
      <TouchableOpacity onPress={navigateToHome} style={styles.button}>
        <Text style={styles.buttonText}>Voltar às compras</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'justify',
  },
  itemText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
