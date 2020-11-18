import React from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import articles from './components/dummies/articles.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}) => (
          <ListItem
            url={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        kyyExtractor={(index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
