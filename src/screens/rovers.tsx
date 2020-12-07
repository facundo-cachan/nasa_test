import React from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Rover} from '../interfaces';
import Capitalize from '@utils/_capitalize';
import log from '@utils/_log';

const RoversScreen = ({route: {params}, navigation}: any) => {
  const {styles, url} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [data, setData] = React.useState([]),
    key = 'rovers',
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    },
    fetched = () =>
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          AsyncStorage.setItem(key, JSON.stringify(json));
          setData(json);
        })
        .catch((error) => console.error(error))
        .finally(async () => {
          if (params) {
            log('PARAMS', {params});
          }
        });

  React.useEffect(() => {
    console.log('RoversScreen');
    log('PARAMS', {params});
    if (!params) {
      AsyncStorage.getItem(key).then((value) => {
        if (value) {
          setData(JSON.parse(value));
        } else {
          log('ELSE');
          fetched;
        }
      });
    } else {
      AsyncStorage.getItem('cameras').then((value) => {
        if (value) {
          AsyncStorage.getItem(key).then((value) => {
            if (value) {
              const rovers = JSON.parse(value).filter((rover: any) =>
                rover.cameras.includes(params.id),
              );
              setData(rovers);
            } else {
              log('ELSE');
            }
          });
        }
      });
    }
    setLoading(!loading);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="RoversScreen">
      {params
        ? data.map(({id}: Rover) => (
            <Btn
              key={id}
              onPress={() => {
                navigation.navigate('Photos', {
                  rover: id,
                  camera: params.id,
                });
              }}
              label={`${Capitalize(id)}`}
              icon="car"
              styles={btnStyle}
            />
          ))
        : data.map(({id, cameras}: Rover) => (
            <Btn
              key={id}
              onPress={() => {
                navigation.navigate('Cameras', {
                  id,
                  cameras,
                });
              }}
              label={`${Capitalize(id)}`}
              icon="car"
              styles={btnStyle}
            />
          ))}
    </SafeAreaView>
  );
};

export default RoversScreen;
