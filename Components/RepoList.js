import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';

//reusable flatlist ( not really !)
const RepoList = props => {
  const renderItem = ({item}) => {
    const gotoRepo = async () => {
      //check url and then open url
      Linking.canOpenURL(item.html_url)
        ? await Linking.openURL(item.html_url)
        : alert('Cannot Open Repo URL');
    };

    return (
      <TouchableOpacity
        style={styles.repoContainer}
        //navigation with params for detail screen
        onPress={() => {
          props.navigation.navigate('Detail', {
            item: item,
          });
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.private ? 'Private' : 'Public'}</Text>
        </View>

        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.text}>
            ⦿ {item.language ? item.language : 'Not Specific'}
          </Text>
          <Text style={styles.text}>★ {item.stargazers_count}</Text>
        </View>

        <Text
          style={styles.btnText}
          onPress={() => {
            gotoRepo();
          }}>
          Goto Repo
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      initialNumToRender={6}
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default React.memo(RepoList);

const styles = StyleSheet.create({
  repoContainer: {
    width: '100%',
    marginVertical: 10,
    borderColor: '#5c5c5c5c',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 12,
    color: 'black',
    lineHeight: 30,
    marginRight: 10,
  },
  description: {
    fontSize: 12,
    color: 'black',
    lineHeight: 30,
  },
  btnText: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'darkblue',
  },
});
