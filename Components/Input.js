import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

// reusable input component with container
const Input = props => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{props.label}</Text>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor="gray"
        placeholder={props.label}
        style={styles.input}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 10,
    marginVertical: 20,
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#2d2d2d',
    borderWidth: 2,
    marginTop: 5,
    color: 'black',
  },
});
