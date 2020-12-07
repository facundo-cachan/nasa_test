import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';
import {Loading, MyCalendar} from '@components';
import {AppContext} from '@navigation/AppProvider';
import {width} from '@utils/_dimensions';

import type {Photo, Rover} from '../interfaces';

const PhotosScreen = ({route: {params}}: any) => {
  const {styles, api_key} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [data, setData] = React.useState([]),
    [day, setDay] = React.useState('2004-01-14'); /** formatDate(Date()) */

  React.useEffect(() => {
    if (params) {
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/photos?sol=1000&camera=${params.camera}&api_key=${api_key}`,
      )
        .then(async (response) => await response.json())
        .then((json) => {
          if (json.photos && json.photos.length >= 1) {
            setData(json.photos);
          }
        })
        .catch((error) => console.error(error));
    } else {
      console.log('PhotosScreen NOT PARAMS');
      AsyncStorage.getItem('rovers').then((rovers) => {
        if (rovers) {
          console.log(rovers);
          JSON.parse(rovers).map(({id}: Rover) => {
            console.log(
              `https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?earth_date=${day}&api_key=${api_key}`,
            );
            fetch(
              `https://api.nasa.gov/mars-photos/api/v1/rovers/${id}/photos?earth_date=${day}&api_key=${api_key}`,
            )
              .then((response) => response.json())
              .then((json) => {
                setData(json.photos);
                AsyncStorage.setItem(String(day), JSON.stringify(json.photos));
              })
              .catch((error) => console.error(error));
          });
        }
      });
    }
    setLoading(!loading);
  }, [params]);
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="PhotosScreen">
      <ScrollView
        style={styles.scrollView}
        scrollEventThrottle={200}
        decelerationRate="fast">
        {data.length >= 1 ? (
          data.map((info: Photo) => (
            <FastImage
              key={info.id}
              style={{width, height: width}}
              source={{
                uri: info.img_src,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          ))
        ) : (
          <Loading />
        )}
      </ScrollView>

      <MyCalendar
        onDayPress={(day: any) => {
          setDay(day.dateString);
        }}
      />
    </SafeAreaView>
  );
};

export default PhotosScreen;
