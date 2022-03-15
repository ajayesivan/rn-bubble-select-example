import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  FlatList,
} from 'react-native';
import SCREEN_NAMES from '..';

const favorites = require('../../favorites.json');

const FavoriteListScreen = ({route, navigation}) => {
  const {selected} = route.params || {};
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Interests</Text>
        <FlatList
          style={styles.list}
          data={selected.map(id => favorites[id])}
          renderItem={({item}) => (
            <Text style={styles.listItem}>{item.name}</Text>
          )}
          keyExtractor={item => item.id}
        />
        <Button
          title="Edit"
          onPress={() => navigation.navigate(SCREEN_NAMES.SelectFavoriteScreen)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flex: 1,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  list: {
    marginVertical: 20,
  },
  listItem: {
    fontSize: 16,
    color: 'red',
    backgroundColor: '#eee',
    marginBottom: 4,
    textAlign: 'center',
    padding: 20,
  },
});

export default FavoriteListScreen;
