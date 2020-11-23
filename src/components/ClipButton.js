import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

const ClipButton = ({onPress, enabled}) => {
  const name = enabled ? 'bookmark' : 'bookmark-o';
  console.log(name);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={name} size={40} />
    </TouchableOpacity>
  );
};

export default ClipButton;
