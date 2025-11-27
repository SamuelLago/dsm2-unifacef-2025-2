import { Button, StyleSheet, Text, View } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agenda do dia</Text>
      <Text style={styles.nome}>Samuel Schisari Demacq Lago</Text>
      <Text style={styles.nome}>6 - Engenharia de Software</Text>
      <Button
        style={styles.botao}
        title="Meus compromissos"
        onPress={() => navigation.navigate('Meus compromissos')}
      />
      <Button
        style={styles.botao}
        title="Compromissos da equipe"
        onPress={() => navigation.navigate('Compromissos da equipe')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  nome: {
    fontSize: 16,
    marginTop: 8,
  },
  botao: {
    marginBottom: 12,
  },
});
