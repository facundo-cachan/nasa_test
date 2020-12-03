import React from 'react';
import {SafeAreaView, View, Text, FlatList, Image} from 'react-native';
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
      setData(params);
      fetch(
        `${url}/${params.rover}/photos?&api_key=DEMO_KEY&sol=10&camera=${params.camera}`,
      )
        .then((response) => response.json())
        .then((json) => {
          if (json.photos && json.photos.length >= 1) setData(json.photos);
        })
        .catch((error) => console.error(error));
    } else {
      AsyncStorage.getItem('rovers').then((rovers) => {
        if (rovers) {
          JSON.parse(rovers).map(({id}: Rover) =>
            fetch(`${url}/${id}/photos/api_key=DEMO_KEY&earth_date=${day}`)
              .then((response) => response.json())
              .then((json) => {
                setData(json);
                AsyncStorage.setItem(String(day), JSON.stringify(json));
              })
              .catch((error) => console.error(error)),
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
      <FlatList
        data={JSON.parse(data).filter(
          (photo: Photo) => photo.earth_date === day,
        )}
        renderItem={({item}: any) => (
          <View style={styles.viewCentered}>
            <Image
              style={styles.img}
              source={{uri: item.img_src, cache: 'force-cache'}}
            />
          </View>
        )}
        keyExtractor={(item: any) => item.id.toString()}
      />
      <MyCalendar
        onDayPress={(day: any) => {
          setDay(day.dateString);
        }}
      />
    </SafeAreaView>
  );
};

export default PhotosScreen;
