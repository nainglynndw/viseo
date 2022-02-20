import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RepoDetailsComponent = props => {
  //get data from param
  const {item} = props.item;

  const Item = ({data, str}) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>
          {/* first letter capitalize */}
          {str.charAt(0).toUpperCase() + str.slice(1)}
        </Text>
        <Text style={styles.info}>
          {/* data null check */}-{' '}
          {item[data] !== '' ? item[data].toString() : 'No Specific Data'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.header}>{item.name}</Text>
      <View style={styles.body}>
        <Item str="description" data="description" />
        <Item str="privacy" data="private" />
        <Item str="visibility" data="visibility" />
        <Item str="language" data="language" />
        <Item str="star" data="stargazers_count" />
        <Item str="URL" data="html_url" />
        <Item str="created At" data="created_at" />
      </View>
    </View>
  );
};

export default React.memo(RepoDetailsComponent);

const styles = StyleSheet.create({
  detailContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2b2b2b',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  body: {
    width: '100%',
  },
  itemContainer: {
    borderRadius: 5,
    backgroundColor: '#ffffff8f',
    borderWidth: 2,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  info: {
    fontSize: 14,
    color: 'black',
  },
});
