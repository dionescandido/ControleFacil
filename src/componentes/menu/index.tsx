import React from 'react';
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../../view/home';
import { PerfilUsuario } from '../../view/usuario/perfil';
import { ImagemPerfil } from '../imagemPerfil';
import { DrawerLayout } from 'react-native-gesture-handler';
import { Image } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
import { Linking, Text } from 'react-native';
import { Styles } from './styles';

const Drawer = createDrawerNavigator();

export function Menu() {
  return (

   
    <NavigationContainer >   
      <Drawer.Navigator initialRouteName="Foto" drawerContent={props => <DrawerContentScrollView {...props}>
        <ImagemPerfil/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>}> 
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Perfil" component={PerfilUsuario} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}