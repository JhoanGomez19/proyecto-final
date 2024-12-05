import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { images } from '../data/image';

const HouseDetailsScreen = ({ route, navigation }) => {
  const { house } = route.params;

  const handleContactPress = () => {
    Alert.alert(
      'Contacto',
      `Puedes llamar o enviar un mensaje al propietario al número: +57 ${Math.floor(300000000 + Math.random() * 699999999)}`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={images[house.image]} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{house.name}</Text>
        <Text style={styles.price}>Precio: ${house.price.toLocaleString()}</Text>
        <Text style={styles.description}>
          {house.description || `Esta casa ${house.name} es una opción increíble para ti. Con un diseño moderno, espacios amplios, y una ubicación inmejorable, esta casa ofrece comodidad y estilo para tu familia.`}
        </Text>
        <TouchableOpacity style={styles.contactButton} onPress={handleContactPress}>
          <Text style={styles.contactButtonText}>Contactar al Propietario</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff7f50',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 24,
  },
  contactButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HouseDetailsScreen;
