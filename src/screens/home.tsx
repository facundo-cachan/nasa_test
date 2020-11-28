import React from 'react';
import {View, Text} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

const HomeScreen = ({route: {name}}: any) => {
  const {styles} = React.useContext(AppContext),
    [data, setData] = React.useState([]),
    [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${String(
        name,
      ).toLowerCase()}/photos?sol=10&api_key=DEMO_KEY`,
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 500),
      );
  }, [name]);

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.viewCentered}>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default HomeScreen;
