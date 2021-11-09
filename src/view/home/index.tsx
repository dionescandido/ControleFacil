import React from "react";
import { Button, View } from "react-native";


 export function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Perfil')}
          title="Volta para o perfil"
        />
      </View>
    );
  }
  