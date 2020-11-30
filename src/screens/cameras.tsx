import React from 'react';
import {SafeAreaView} from 'react-native';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';
// const Cameras = require('../mocks/cameras.json');

type Rover = {
  id: string;
  name: string;
};

const CamerasScreen = ({
  navigation,
  route: {
    params: {id, cameras},
  },
}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="CamerasScreen">
      {cameras.map((camera: Rover) => (
        <Btn
          key={camera}
          onPress={() => {
            navigation.navigate('Photos', {
              id,
              camera,
            });
          }}
          label={camera}
          icon="camera"
        />
      ))}
    </SafeAreaView>
  );
};

export default CamerasScreen;
