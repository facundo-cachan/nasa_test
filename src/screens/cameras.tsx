import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

type Camera = {
  id: string;
  name: string;
};

const CamerasScreen = ({route: {params}, navigation}: any) => {
  console.log(params);

  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [cameras, setCameras] = React.useState([]);

  React.useEffect(() => {
    if (params === undefined) {
      setCameras(require('../mocks/cameras.json'));
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
      {params && params.rover ? (
        <>
          <Text style={styles.screenTitle}>{params.rover}</Text>
          {cameras.map((camera: string) => (
            <Btn
              key={camera}
              onPress={() => {
                navigation.navigate('Photos', {
                  camera,
                  rover: params.rover,
                });
              }}
              label={camera}
              icon="camera"
            />
          ))}
        </>
      ) : (
        cameras.map(({id, name}: Camera) => (
          <Btn
            key={id}
            onPress={() => {
              navigation.navigate('Rovers', {
                id,
                name,
              });
            }}
            label={name}
            icon="camera"
          />
        ))
      )}
    </SafeAreaView>
  );
};

export default CamerasScreen;
