import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchInput from '../components/SearchInput';
import { MEMBERS } from '../data/members';

export default function SearchableListScreen() {
  const [query, setQuery] = useState<string>('');           // texto digitado
  const [filtered, setFiltered] = useState<string[]>(MEMBERS); // lista filtrada

  useEffect(() => {
    const q = query.trim().toLowerCase();

    if (q === '') {
      setFiltered(MEMBERS);
      return;
    }

    const results = MEMBERS.filter((item) =>
      item.toLowerCase().includes(q)
    );

    setFiltered(results);
  }, [query]); // efeito roda toda vez que o texto mudar

  return (
    <View style={styles.container}>
      <SearchInput
        value={query}
        onChangeText={setQuery}
        placeholder="Pesquisar membro..."
      />

      <FlatList
        data={filtered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhum resultado encontrado</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#f9f9f9',
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
});
