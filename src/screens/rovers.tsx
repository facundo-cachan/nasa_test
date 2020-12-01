import React from 'react';
import {SafeAreaView} from 'react-native';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

import type {Rover} from '../interfaces';

import roversJSON from '../mocks/rover.json';

const RoversScreen = ({route: {params}, navigation}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [rovers, setRovers] = React.useState([]),
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };

  React.useEffect(() => {
    if (params === undefined) {
      setRovers(roversJSON);
    } else {
      setRovers(
        roversJSON.filter((rover: Rover) => {
          if (Object(rover.cameras).includes(params.id)) return rover.id;
        }),
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="RoversScreen">
      {params
        ? rovers.map(({id}: Rover) => (
            <Btn
              key={id}
              onPress={() => {
                navigation.navigate('Photos', {
                  rover: id,
                  camera: params.id,
                });
              }}
              label={id}
              icon="car"
              styles={btnStyle}
            />
          ))
        : rovers.map(({id, cameras}: Rover) => (
            <Btn
              key={id}
              onPress={() => {
                navigation.navigate('Cameras', {
                  id,
                  cameras,
                });
              }}
              label={id.toUpperCase()}
              icon="car"
              styles={btnStyle}
            />
          ))}
    </SafeAreaView>
  );
};

export default RoversScreen;
