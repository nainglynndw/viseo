import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import SearchData from '../Components/SearchData';
import Button from '../Components/Button';
import store from '../store';
import RepoList from '../Components/RepoList';

const ListScreen = props => {
  const [searchText, setSearchText] = useState('');
  const [gotData, setGotData] = useState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  //getData from redux store after changing searchData
  useEffect(() => {
    store.subscribe(() => {
      setData(store.getState().repos);
    });
  }, [gotData]);

  //search and fetch data
  //useCallback hook for performance
  const getData = useCallback(async () => {
    if (searchText !== '') {
      setLoading(true);
      try {
        const gg = await SearchData(searchText);
        setGotData(gg);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      setData({});
    }
  }, [searchText]);

  return (
    <View style={styles.ListScreen}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search ... "
          style={styles.input}
          onChangeText={t => setSearchText(t)}
        />
        <Button
          title="Search"
          onPress={() => {
            getData(searchText);
          }}
        />
      </View>
      <View style={styles.body}>
        {/* check loading and data length to show various UI */}
        {loading ? (
          <ActivityIndicator animating={loading} size="large" color="black" />
        ) : data && data.length > 0 ? (
          <RepoList data={data} navigation={props.navigation} />
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>No Data Here</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default React.memo(ListScreen);

const styles = StyleSheet.create({
  ListScreen: {
    width: '100%',
    padding: 10,
    flex: 1,
  },
  searchContainer: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#2d2d2d',
    borderWidth: 2,
    marginTop: 5,
    color: 'black',
  },
  body: {
    width: '100%',
    flex: 1,
  },
  errorContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkred',
  },
});
