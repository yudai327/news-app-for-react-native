import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './components/dummies/articles.json';
import {newsApiKey} from '../app';
import axios from 'axios';

const URL = `http://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${newsApiKey}`;

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

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
