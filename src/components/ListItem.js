/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    borderColor: 'gray',
  },
  itemLeftContainer: {
    backgroundColor: 'red',
    width: 100,
  },
  itemRightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
});

const ListItem = ({url, title, author}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeftContainer}>
        {!!url && (
          <Image style={{width: 100, height: 100}} source={{uri: url}} />
        )}
      </View>
      <View style={styles.itemRightContainer}>
        <Text>{title}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
};

export default ListItem;
