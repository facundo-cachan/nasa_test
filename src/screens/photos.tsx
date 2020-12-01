import React from 'react';
import {SafeAreaView, View, Image, Text, FlatList} from 'react-native';

import {Loading, MyCalendar} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Photo, Rover} from '../interfaces';

const PhotosScreen = ({route: {params}}: any) => {
  const {styles, day, setDay} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [photos, setPhotos] = React.useState([]),
    fetched = (endPoint: string) =>
      fetch(endPoint)
        .then((response) => response.json())
        .then((json) =>
          json.photos && json.photos.length >= 1
            ? setPhotos(photos.concat(json.photos))
            : null,
        )
        .catch((error) => console.error(error))
        .finally(() =>
          setTimeout(() => {
            console.log(endPoint);
            setLoading(false);
          }, 500),
        );

  React.useEffect(() => {
    if (params === undefined) {
      const Rovers = require('../mocks/rover.json');
      Rovers.map(({id}: Rover, k: number) => {
        let currentPhotos = `https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?earth_date=${day}&page=${
          k + 1
        }&api_key=DEMO_KEY`;
        fetched(currentPhotos);
      });
    } else {
      const {camera, rover} = params;
      let endPoint =
        process.env.NODE_ENV === 'development'
          ? `http://localhost:8000/${rover}/${camera}`
          : `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=10&camera=${camera}&api_key=DEMO_KEY`;
      fetched(endPoint);
    }
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
            <Image style={styles.img} source={{uri: item.img_src}} />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  );
};

export default PhotosScreen;
