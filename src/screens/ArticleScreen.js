import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addClip, deleteClip} from '../store/actions/user';
import ClipButton from '../components/ClipButton';
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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {clips} = user;

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if (isClipped()) {
      dispatch(deleteClip({clip: article}));
    } else {
      dispatch(addClip({clip: article}));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
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
