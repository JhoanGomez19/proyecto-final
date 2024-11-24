import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ search, setSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar casas..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default SearchBar;
