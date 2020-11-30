import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

type Rover = {
  id: string;
  img: string;
  cameras: string[];
};
const roversJSON = require('../mocks/rover.json');

const RoversScreen = ({route: {params}, navigation}: any) => {
  console.log(params);

  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [rovers, setRovers] = React.useState([]);

  React.useEffect(() => {
    if (params === undefined) {
      setRovers(roversJSON);
    } else {
      console.log(
        roversJSON.filter((rover: Rover) => {
          if (rover.cameras.includes(params.id)) return rover.id;
        }),
      );
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="RoversScreen">
      <Text style={styles.screenTitle}>{rovers}</Text>
      {/*
      rovers.map(({cameras, id}: Rover) => (
        <Btn
          key={id}
          onPress={() => {
            navigation.navigate('Cameras', {
              cameras,
              rover: id.toLowerCase(),
            });
          }}
          label={id}
          icon="car"
        />
      ))
        */}
    </SafeAreaView>
  );
};

export default RoversScreen;
