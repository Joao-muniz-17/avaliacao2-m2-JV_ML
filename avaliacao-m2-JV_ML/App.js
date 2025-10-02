import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PainelDeControleScreen  from './screens/PainelDeControleScreen';

export default function App() {
  return (


    <View styles={styles.container}>
        
      <Text>Painel de Controle da Casa</Text>
      <PainelDeControleScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    margin: 10,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});


