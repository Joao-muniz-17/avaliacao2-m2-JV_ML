import {useState} from "react";
import { View, Text, Switch, StyleSheet, Button } from "react-native";

export default function Interruptor(props) {

    const [ligado, setLigado] = useState(false);

    return(
    <View>
        <Text>{props.nome}{ligado?' ligada':' desligada'}</Text>
    <Button
        onPress={() => setLigado(!ligado)} title={ligado?'Desligar':'Ligar'
       }/>
 
    </View>
);
}