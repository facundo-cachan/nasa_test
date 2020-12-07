import React from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading, MyCalendar} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Photo, Rover} from '../interfaces';

const PhotosScreen = ({route: {params}}: any) => {
  const {styles, url} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [data, setData] = React.useState(),
    [day, setDay] = React.useState('2004-01-14'); /** formatDate(Date()) */

  React.useEffect(() => {
    if (params) {
      console.log('PhotosScreen PARAMS');
      console.log(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/photos?sol=1000&camera=${params.camera}&api_key=0ZegDETvWCczEnQHgiWdhhlsehO4i32RQq5z09r9`,
      );
      fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/photos?sol=1000&camera=${params.camera}&api_key=0ZegDETvWCczEnQHgiWdhhlsehO4i32RQq5z09r9`,
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.photos && json.photos.length >= 1) setData(json.photos);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(!loading));
    } else {
      console.log('PhotosScreen NOT PARAMS');
      AsyncStorage.getItem('rovers').then((rovers) => {
        if (rovers) {
          console.log(rovers);
          /*
          JSON.parse(rovers).map(({id}: Rover) =>
            fetch(`${url}/${id}/photos/api_key=DEMO_KEY&earth_date=${day}`)
              .then((response) => response.json())
              .then((json) => {
                setData(json);
                AsyncStorage.setItem(String(day), JSON.stringify(json));
              })
              .catch((error) => console.error(error)),
          );
          */
        }
      });
    }
  }, [params]);
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="PhotosScreen">
      <ScrollView
        style={styles.scrollView}
        scrollEventThrottle={200}
        decelerationRate="fast">
        {data.length >= 1 &&
          data.map((info: Photo) => (
            <View key={info.id} style={styles.viewCentered}>
              <Image style={styles.img} source={{uri: info.img_src}} />
            </View>
          ))}
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
