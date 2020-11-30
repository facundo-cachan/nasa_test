import React from 'react';
import {SafeAreaView} from 'react-native';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Camera} from '../interfaces';

const CamerasScreen = ({route: {params}, navigation}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [cameras, setCameras] = React.useState([]);

  React.useEffect(() => {
    if (params === undefined) {
      setCameras(import('../mocks/cameras.json'));
    } else {
      setCameras(params.cameras);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="CamerasScreen">
      {params
        ? cameras.map((camera: string) => (
            <Btn
              key={camera}
              onPress={() => {
                navigation.navigate('Photos', {
                  rover: params.id,
                  camera,
                });
              }}
              label={camera.toUpperCase()}
              icon="camera"
            />
          ))
        : cameras.map(({id, name}: Camera) => (
            <Btn
              key={id}
              onPress={() => {
                navigation.navigate('Rovers', {
                  id,
                });
              }}
              label={name.toUpperCase()}
              icon="camera"
            />
          ))}
    </SafeAreaView>
  );
};

export default CamerasScreen;
