import React, { useEffect, useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global'

const Inicio = ({navigation}) => {

   // state de la app
   const [ clientes, guardarClientes ] = useState([]);
   const [ consultarAPI, guardarConsultarAPI ] = useState(true);


   useEffect(() => {
    const obtenerClientesApi = async () => {
        try {
            const resultado = await axios.get('http://192.168.1.106:3000/clientes');  // esta url es por usar android en windows ocupas la url que tengas
            guardarClientes(resultado.data)
            guardarConsultarAPI(false);
        } catch (error) {
          console.log('que paso');
          console.log('Mensaje de error:', error.message); // Muestra el mensaje de error específico
          console.log('Código de estado:', error.response?.status); // Muestra el código de estado de la respuesta si está disponible
          console.log('Data de respuesta:', error.response?.data); // Muestra los datos de la respuesta si están disponibles
          console.log('Configuración de la solicitud:', error.config); // Muestra la configuración de la solicitud Axios

        }
    }

    if(consultarAPI) {
        obtenerClientesApi();
        
    }
}, [consultarAPI]);


  return (
    <View style={globalStyles.contenedor}>

            <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI }) }>
                Nuevo Cliente
            </Button>

            <Headline style={globalStyles.titulo}> { clientes.length > 0 ? "Clientes" : "Aún no hay Clientes" } </Headline>

            <FlatList
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString()  }
                renderItem={ ({item}) => (
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                        onPress={ () => navigation.navigate("DetallesCliente", { item, guardarConsultarAPI }) }
                    />
                )}
            />

            <FAB
                icon="plus"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI }) }
            />
        </View>
  )
}

export default Inicio
