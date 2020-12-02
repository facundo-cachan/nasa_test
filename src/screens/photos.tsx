import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const PhotosScreen = ({route: {params}}: any) => {
  return (
    <SafeAreaView testID="PhotosScreen">
      <Text>{JSON.stringify(params)}</Text>
    </SafeAreaView>
  );
};

export default PhotosScreen;
