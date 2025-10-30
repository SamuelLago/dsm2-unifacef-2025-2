import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const produtos = [
  { id: "1", nome: "Notebook", preco: 3500.0, categoria: "Eletrônicos" },
  { id: "2", nome: "Smartphone", preco: 2500.0, categoria: "Eletrônicos" },
  { id: "3", nome: "Camiseta", preco: 80.0, categoria: "Roupas" },
  { id: "4", nome: "Calça Jeans", preco: 120.0, categoria: "Roupas" },
  { id: "5", nome: "Geladeira", preco: 2800.0, categoria: "Eletrodomésticos" },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.categoria}>{item.categoria}</Text>
      <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Catálogo de Produtos</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: "600",
  },
  categoria: {
    fontSize: 14,
    color: "#666",
  },
  preco: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2b9348",
    marginTop: 4,
  },
});
