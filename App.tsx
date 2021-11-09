import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerView } from '@react-navigation/drawer';
import { Menu } from './src/componentes/menu';
import { ImagemPerfil } from './src/componentes/imagemPerfil';




const Drawer = createDrawerNavigator();

export default function App() {
  return (

     <Menu></Menu>

  );
}

