import * as React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Styles } from './styles'; 

export const ImagemPerfil = () => (

    <View style={Styles.container}>

      <Avatar.Image size={50} source={require('../../../assets/Avatar.png')}  style={Styles.logo}/>
      <Text style={Styles.name}>Diones Candido</Text>

    </View>


  );
  