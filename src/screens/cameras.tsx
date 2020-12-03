import React from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Camera} from '../interfaces';
import Capitalize from '@utils/_capitalize';

const CamerasScreen = ({route: {params}, navigation}: any) => {
  const {styles, url} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [data, setData] = React.useState([]),
    key = 'cameras',
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };
  React.useEffect(() => {
    console.log('CamerasScreen', params);
    if (params) {
      setData(params.cameras);
      AsyncStorage.setItem(key, JSON.stringify(params.cameras));
    } else {
      fetch(`${url}/cameras`)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          AsyncStorage.setItem(key, JSON.stringify(json));
        })
        .catch((error) => console.error(error));
    }
    setLoading(!loading);
  }, [params]);
  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="CamerasScreen">
      {params
        ? data.map((camera: any, id: any) => (
            <Btn
              key={id}
              label={Capitalize(camera)}
              icon="images"
              styles={btnStyle}
              onPress={() => {
                navigation.navigate('Photos', {
                  camera,
                  rover: params.id,
                });
              }}
            />
          ))
        : data.map(({id, name}: Camera) => (
            <Btn
              key={id}
              label={Capitalize(id)}
              icon="car"
              styles={btnStyle}
              onPress={() => {
                navigation.navigate('Rovers', {
                  id,
                });
              }}
            />
          ))}
    </SafeAreaView>
  );
};

export default CamerasScreen;
