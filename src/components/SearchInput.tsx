import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface SearchInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchInput({
  value,
  onChangeText,
  placeholder,
  ...rest
}: SearchInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder || 'Pesquisar...'}
      value={value}
      onChangeText={onChangeText}
      autoCorrect={false}
      autoCapitalize="none"
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
});
