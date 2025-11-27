import { FlatList, StyleSheet, Text, View } from 'react-native';

const compromissos = [
  { id: '1', description: '09h30: Reunião "Daily"' },
  {
    id: '2',
    description: '14h00: Reunião com cliente Carros & Carros',
  },
  { id: '3', description: '16h30: Prazo final Projeto X' },
];

export default function MeusCompromissos() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eu}>(Eu)</Text>
        <View style={styles.infoUsuario}>
          <Text style={styles.nome}>Samuel Schisari Demacq Lago</Text>
          <Text style={styles.nome}>6 - Engenharia de Software</Text>
        </View>
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={compromissos}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.descricao}>{item.description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  eu: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoUsuario: {
    marginTop: 4,
  },
  nome: {
    fontSize: 14,
  },
  item: {
    marginBottom: 20,
    flexDirection: 'row',
  },
});
