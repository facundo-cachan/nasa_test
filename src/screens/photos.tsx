import React from 'react';
import {SafeAreaView, View, Image, Text, FlatList} from 'react-native';

import {Loading, MyCalendar} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Photo} from '../interfaces';

const PhotosScreen = ({
  route: {
    params: {camera, rover},
  },
}: any) => {
  const {styles, day, setDay} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [photos, setPhotos] = React.useState([]);

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
      <MyCalendar
        onDayPress={(day: any) => {
          setDay(day.dateString);
        }}
      />
      <FlatList
        data={photos.filter((photo: Photo) => photo.earth_date === day)}
        renderItem={({item}: any) => (
          <View style={[styles.viewCentered, {backgroundColor: '#A9F5A9'}]}>
            <Text>
              {item.id} | {item.earth_date}
            </Text>
            {/* <Image style={styles.img} source={{uri: item.img_src}} /> */}
          </View>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};

export default PhotosScreen;
