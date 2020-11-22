import React from 'react';
import {useSelector} from 'react-redux';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

const ClipScreen = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const {clips} = user;
  console.log(user.clips);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({item}) => (
          <ListItem
            url={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', {article: item})}
          />
        )}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
};

export default ClipScreen;
