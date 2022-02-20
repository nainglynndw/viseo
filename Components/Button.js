import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

//reusable button component
const Button = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

const styles = StyleSheet.create({
  btn: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    elevation: 1,
  },
  btnText: {
    fontSize: 18,
    color: 'darkblue',
    fontWeight: 'bold',
  },
});
