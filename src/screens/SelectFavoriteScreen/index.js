import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  useWindowDimensions,
  Button,
} from 'react-native';
import BubbleSelect, {Bubble} from 'react-native-bubble-select';

const favorites = require('./favorites.json');

const SelectFavoriteScreen = () => {
  const [selected, setSelected] = useState([]);
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Choose 3 or more of your interests</Text>
        <Text style={styles.text}>
          Tap once on the artists you like, or twice on the ones you love. Press
          and hold the ones you don't.
        </Text>
        <View style={styles.selectWrapper}>
          <BubbleSelect
            onSelect={bubble => setSelected([...selected, bubble.id])}
            onDeselect={bubble => {
              const newSelected = [...selected];
              newSelected.splice(newSelected.indexOf(bubble.id), 1);
              setSelected(newSelected);
            }}
            width={width}
            height={height}>
            {Object.keys(favorites).map(id => (
              <Bubble
                id={id}
                text={favorites[id].name}
                color="red"
                fontSize={12}
              />
            ))}
          </BubbleSelect>
        </View>
        <Button disabled={selected.length < 3} title="Confirm Interests" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  text: {
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 20,
    fontSize: 14,
    color: 'grey',
  },
  selectWrapper: {
    flex: 1,
  },
});

export default SelectFavoriteScreen;
