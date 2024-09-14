
    import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image  } from 'react-native';
    import { useState } from 'react';
    import { useRoute } from '@react-navigation/native';
    export default function Stack(){
        const [data, setData] = useState([]);
        const route = useRoute();
        const {id} = route.params;
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(dataApi => setData(dataApi))
        .catch(err => console.error(err));
        
        
        return (
        <View style={styles.card}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{data.name}</Text>
            <Text>Status: {data.status}</Text>
            <Text>Species: {data.species}</Text>
            <Text>Gender: {data.gender}</Text>
            <Text>Origin: {data.origin?.name}</Text>
            <Text>Location: {data.location?.name}</Text>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
        card: {
            backgroundColor: 'yellow',
            borderRadius: 5,
            padding: 10,
            margin: 5,
            shadowColor: 'green',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 1,
        },
        image: {
            width: 200,
            height: 200,
            borderRadius: 10,
            marginBottom: 20,
        },
        infoContainer: {
            marginBottom: 7,
        },
        name: {
            color: 'black', 
            fontSize: 18,
            fontWeight: 'bold', 
            marginBottom: 8, 
            textAlign: 'center', 
        },
        info: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center', 
        },
        button: {
            backgroundColor: 'black',
            padding: 12,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 15,
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold',
        },
        
        subtitle: {
            fontSize: 16,
            color: '#ccc',
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
    });
    