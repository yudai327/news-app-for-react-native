import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import ListItem from './components/ListItem';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <ListItem
          author="sample news"
          title="hello!!hello!!hello!!hello!!hello!!hello!!hello!!hello!! hello!!
          hello!! hello!! hello!! hello!! hello!! hello!! hello!! hello!!"
          url="https://picsum.photos/id/237/200/200"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
