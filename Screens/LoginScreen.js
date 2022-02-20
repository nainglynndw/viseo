import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import Input from '../Components/Input';
import Button from '../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = props => {
  const [user, setUser] = useState({});

  // email and password validation

  const Login = async () => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(user.email)) {
      if (user.password === 'Viseo123') {
        try {
          const userData = JSON.stringify(user);
          //store to localstorage and goto home screen
          //secure localstorage is prefered
          await AsyncStorage.setItem('userData', userData);
          return props.navigation.reset({index: 0, routes: [{name: 'List'}]});
        } catch (error) {
          return alert(error);
        }
      }
      return alert('Password Not Match !');
    } else {
      return alert('Invalid Email');
    }
  };

  return (
    <View style={styles.login}>
      <Image source={require('../asset/logo.png')} style={styles.logo} />
      <Input
        secureTextEntry={false}
        label="Email"
        onChangeText={t => {
          setUser({...user, email: t});
        }}
      />

      <Input
        secureTextEntry={true}
        label="Password = Viseo123"
        onChangeText={t => {
          setUser({...user, password: t});
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          Login();
        }}
      />
    </View>
  );
};

export default React.memo(LoginScreen);

const styles = StyleSheet.create({
  login: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '60%',
    height: 100,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
