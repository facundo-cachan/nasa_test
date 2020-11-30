import React from 'react';
import {SafeAreaView, TouchableHighlight, Text} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

type Rover = {
  id: string;
  img: string;
  cameras: string[];
};

const Rovers = require('../mocks/rover.json');

const RoversScreen = ({navigation}: any) => {
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
    <SafeAreaView style={styles.container} testID="RoversScreen">
      {Rovers.map(({id, cameras}: Rover) => (
        <TouchableHighlight
          key={id}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={styles.viewCentered}
          onPress={() => {
            navigation.navigate('Cameras', {
              id,
              cameras,
            });
          }}>
          <Text style={styles.viewTxt}>{id}</Text>
        </TouchableHighlight>
      ))}
    </SafeAreaView>
  );
};

export default RoversScreen;
