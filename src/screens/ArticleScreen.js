import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
  },
  itemTitle: {
    fontSize: 20,
  },
  itemAt: {
    color: 'gray',
  },
});

const ArticleScreen = ({route}) => {
  const {article} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{article.title}</Text>
        <Text>{article.author}</Text>
        <Text>{article.description}</Text>
        <Text style={styles.itemAt}>{article.publishedAt}</Text>
        <Text>{article.url}</Text>
      </View>
    </SafeAreaView>
  );
};
export default ArticleScreen;
