import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';


const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: '#1774F2',
  },
};

const App = () => {
  console.log(theme.colors.primary)
  return (
    <>
<NavigationContainer>
      <Stack.Navigator
      initialRouteName='Inicio'
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary
        },
       
        headerTintColor: theme.colors.surface, 
       headerTitleStyle: {fontWeight: 'bold'},
       headerTitleAlign: 'center'
      }}
      >
        <Stack.Screen
         name="Inicio" 
         component={Inicio}
        />
        <Stack.Screen
         name="NuevoCliente" 
         component={NuevoCliente}
         options={{
          title:"Nuevo Cliente"
         }}
        />
        <Stack.Screen
         name="DetallesCliente" 
         component={DetallesCliente}
         options={{
          title:"Detalles Cliente"
         }}
        />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
