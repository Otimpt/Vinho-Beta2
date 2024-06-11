import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import PaymentSuccessButton from "../componets/PaymentSuccessButton/index";

const db = SQLite.openDatabase({ name: 'ComprasFeitas.db', createFromLocation: '~ComprasFeitas.db' });
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
        headerTitle: 'Pagamento'
    });

    const navigateToPaymentSuccess = () => {
      navigation.navigate('PaymentSuccess', {item});
    };

  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    console.log('Card Number:', cardNumber);
    console.log('Expiry:', expiry);
    console.log('CVV:', cvv);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Número do Cartão"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Expiração (MM/YY)"
        keyboardType="numeric"
        value={expiry}
        onChangeText={(text) => setExpiry(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={(text) => setCvv(text)}
      />
      <PaymentSuccessButton onClick={() => navigateToPaymentSuccess()}/>
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
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
