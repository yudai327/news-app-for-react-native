/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
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

const ListItem = ({url, title, author, onPress}) => {
  console.log(title);
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemLeftContainer}>
        {!!url && (
          <Image style={{width: 100, height: 100}} source={{uri: url}} />
        )}
      </View>
      <View style={styles.itemRightContainer}>
        <Text>{title}</Text>
        <Text>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
