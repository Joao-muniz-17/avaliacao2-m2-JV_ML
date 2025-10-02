import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Interruptor from "../components/Interruptor";

export default function PainelDeControleScreen() {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>Painel de Controle</Text>
            <Interruptor nome="Luz da Sala" />
            <Interruptor nome="Luz do banheiro" />
            <Interruptor nome="Luz do quarto" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        padding: 10,
        margin: 10,
       alignItems: 'center',
      justifyContent: 'center',
    },
  });