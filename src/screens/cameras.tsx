import React from 'react';
import {SafeAreaView} from 'react-native';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Camera} from '../interfaces';

import mockCameras from '../mocks/cameras.json';

const CamerasScreen = ({route: {params}, navigation}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [cameras, setCameras] = React.useState([]),
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };

  React.useEffect(() => {
    if (params === undefined) {
      const cameras = mockCameras;
      setCameras(cameras);
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
              styles={btnStyle}
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
              styles={btnStyle}
            />
          ))}
    </SafeAreaView>
  );
};

export default CamerasScreen;
