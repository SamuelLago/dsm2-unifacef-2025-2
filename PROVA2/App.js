import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CompromissosDaEquipe from './screens/CompromissosDaEquipe';
import Inicio from './screens/Inicio';
import MeusCompromissos from './screens/MeusCompromissos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Inicio} />
        <Stack.Screen name="Meus compromissos" component={MeusCompromissos} />
        <Stack.Screen
          name="Compromissos da equipe"
          component={CompromissosDaEquipe}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
