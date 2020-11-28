import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
};

const Loading = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="small" color="#0000ff" />
  </View>
);

export default Loading;
