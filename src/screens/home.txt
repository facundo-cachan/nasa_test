import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  ImageBackground,
  Text,
} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

type Photos = {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
};

const HomeScreen = ({navigation, route: {name}}: any) => {
  const {styles, selectedStyles} = React.useContext(AppContext),
    [data, setData] = React.useState<Photos[]>([]),
    [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${String(
        name,
      ).toLowerCase()}/photos?sol=10&api_key=DEMO_KEY`,
    )
      .then((response) => response.json())
      .then((json) => setData(json.photos))
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
    <SafeAreaView style={styles.container} testID="HomeScreen">
      <ScrollView style={styles.scrollView}>
        {Object(data).map((info: any, k: any) => (
          <TouchableHighlight
            key={k}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={styles.viewCentered}>
            {selectedStyles && info.img_src ? (
              <ImageBackground
                source={{uri: info.img_src}}
                style={styles.imgBackground}
              />
            ) : (
              <>
                <Text style={styles.viewTxt}>{info.camera.full_name}</Text>
              </>
            )}
          </TouchableHighlight>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
