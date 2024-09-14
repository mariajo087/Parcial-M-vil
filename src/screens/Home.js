import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const [data, setData] = useState([]);
    const urlBase = 'https://rickandmortyapi.com/api';
    const navigation = useNavigation();

    fetch(`${urlBase}/character`)
      .then(response => response.json())
      .then(dataApi => setData(dataApi.results))
      .catch(err => console.error(err));

    const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Stack', { id: item.id })}
            >
              <Text style={styles.buttonText}>Ver Más Detalles</Text>
            </TouchableOpacity>
          </View>
        </View>
      );

    return (
        <View style={styles.container}>
            <View style={styles.containerDataApi}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "black",
    },
    containerDataApi: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'center',
    },
    
    header: {
        width: '100%',
        padding: 20,
        backgroundColor: '#6200EE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#6200EE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        color: 'white',
        fontSize: 14,
    },

    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
        textAlign: 'center',
    },
    input: {
        width: '90%',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    listItem: {
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    listItemText: {
        fontSize: 16,
        color: '#333',
    },
});
