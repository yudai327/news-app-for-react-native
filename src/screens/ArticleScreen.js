import React from 'react';
import {useDispatch} from 'react-redux';
import {addClip, deleteClip} from '../store/actions/user';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

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
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({clip: article}));
        }}>
        <Text style={{margin: 10, fontSize: 30}}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({clip: article}));
        }}>
        <Text style={{margin: 10, fontSize: 30}}>DELETE_CLIP</Text>
      </TouchableOpacity>
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
