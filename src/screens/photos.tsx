import React from 'react';
import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading, MyCalendar} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Photo, Rover} from '../interfaces';

const PhotosScreen = ({route: {params}}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [data, setData] = React.useState(),
    [day, setDay] = React.useState('2004-01-14') /** formatDate(Date()) */,
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers';

  React.useEffect(() => {
    console.log('PhotosScreen');
    console.log('PARAMS', params);
    if (params) {
      setData(params);
      console.log(
        params,
        `${url}/${params.rover}/photos?&api_key=DEMO_KEY&sol=10&camera=${params.camera}`,
      );
      fetch(
        `${url}/${params.rover}/photos?&api_key=DEMO_KEY&sol=10&camera=${params.camera}`,
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.photos && json.photos.length >= 1) setData(json.photos);
        })
        .catch((error) => console.error(error));
    } else {
      console.log('not PARAMS');
      AsyncStorage.getItem('rovers').then((rovers) => {
        if (rovers) {
          JSON.parse(rovers).map(
            ({id}: Rover, k: number) =>
              console.log(
                `${url}/${id}/photos?api_key=DEMO_KEY&sol=10&earth_date=${day}&page=${
                  k + 1
                }`,
              ),
            /*
            fetch(`${url}/${id}/photos?api_key=DEMO_KEY&earth_date=${day}`)
              .then((response) => response.json())
              .then((json) => {
                setData(json);
                AsyncStorage.setItem(String(day), JSON.stringify(json));
              })
              .catch((error) => console.error(error)),
              */
          );
        }
      });
    }
    setLoading(!loading);
  }, [params]);
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="PhotosScreen">
      <MyCalendar
        onDayPress={(day: any) => {
          setDay(day.dateString);
        }}
      />
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
};

export default PhotosScreen;
