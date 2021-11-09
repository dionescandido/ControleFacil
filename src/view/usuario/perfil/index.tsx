import React from "react";
import { Button, View } from "react-native";

export function PerfilUsuario({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="voltar para a home" />
      </View>
    );
  }