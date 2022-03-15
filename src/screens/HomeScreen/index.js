import React from 'react';
import {View, Button} from 'react-native';
import {SCREEN_NAMES} from '..';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Library"
        onPress={() => navigation.navigate(SCREEN_NAMES.SelectLibrary)}
      />
      <Button
        title="Custom"
        onPress={() => navigation.navigate(SCREEN_NAMES.SelectCustom)}
      />
    </View>
  );
};

export default HomeScreen;
