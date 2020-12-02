import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loading = () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
    }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default Loading;
