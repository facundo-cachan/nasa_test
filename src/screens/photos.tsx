import React from 'react';
import {Text, SafeAreaView, ScrollView, View, Image} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Photo} from '../interfaces';

const PhotosScreen = ({
  route: {
    params: {camera, rover},
  },
}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [photos, setPhotos] = React.useState(true);

  React.useEffect(() => {
    let endPoint =
      process.env.NODE_ENV === 'development'
        ? `http://localhost:8000/${rover}/${camera}`
        : `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=10&camera=${camera}&api_key=DEMO_KEY`;
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => setPhotos(json.photos))
      .catch((error) => console.error(error))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 500),
      );
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="PhotosScreen">
      {/*  
      <Text>Photos: {photos.length}</Text>
      <Text>{JSON.stringify(photos)}</Text>
      */}
      <ScrollView style={styles.scrollView}>
        {photos && photos.length >= 1 ? (
          photos.map(({id, img_src}: Photo) => (
            <View key={id} style={styles.viewCentered}>
              <Text style={styles.img}>{img_src}</Text>
              <Image
                style={styles.img}
                source={{
                  uri: img_src,
                }}
              />
            </View>
          ))
        ) : (
          <Text style={styles.screenTitle}>Photos not found</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhotosScreen;
