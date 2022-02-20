import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

// add localstorage for offline access
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = props => {
  const getKeys = async () => {
    // check localstorage whether auth or not . if no auth , goto login , else goto home .
    const gg = await AsyncStorage.getAllKeys();
    console.log(gg);
    if (gg.length <= 0)
      return props.navigation.reset({index: 0, routes: [{name: 'Login'}]});

    return props.navigation.reset({index: 0, routes: [{name: 'List'}]});
  };

  useEffect(() => {
    getKeys();
  }, []);

  //plain view for no transition effect but I want to add 3sec animation to collect data .
  return <View style={styles.splash}></View>;
};

export default React.memo(Splash);

const styles = StyleSheet.create({
  splash: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
