import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');

  const handleCadastro = () => {
    setErro('');
    setErroConfirmarSenha('');
    setErroTelefone('');

    // Validação do nome
    if (nome.trim() === '') {
      setErro('O nome completo é obrigatório.');
      return;
    }

    // Validação do email
    if (!email.includes('@')) {
      setErro('Digite um e-mail válido.');
      return;
    }

    // Validação do telefone (apenas números)
    if (!/^\d+$/.test(telefone)) {
      setErroTelefone('O telefone deve conter apenas números.');
      return;
    }

    // Validação da senha
    if (senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Validação de confirmar senha
    if (senha !== confirmarSenha) {
      setErroConfirmarSenha('As senhas não coincidem.');
      return;
    }

    // Se tudo estiver válido, navegue para a tela de Dados
    navigation.navigate('Dados', { nome, email, telefone });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro Completo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="numeric"
        value={telefone}
        onChangeText={setTelefone}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
      {erroTelefone ? <Text style={styles.erro}>{erroTelefone}</Text> : null}
      {erroConfirmarSenha ? <Text style={styles.erro}>{erroConfirmarSenha}</Text> : null}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 15, padding: 10, borderRadius: 8 },
  erro: { color: 'red', marginBottom: 10 },
});
