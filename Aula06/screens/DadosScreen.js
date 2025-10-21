import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DadosScreen({ route }) {
  const { nome, email, telefone } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados Cadastrais</Text>
      <Text>Nome: {nome}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Telefone: {telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});
