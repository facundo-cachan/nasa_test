import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

const PhotosScreen = ({
  route: {
    params: {id, camera},
  },
}: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [photos, setPhotos] = React.useState(true);

  React.useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${id.toLowerCase()}/photos?sol=10&camera=${camera.toLowerCase()}&api_key=DEMO_KEY`,
    )
      .then((response) => response.json())
      .then((json) => setPhotos(json.photos))
      .catch((error) => console.error(error))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 500),
      );
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="PhotosScreen">
      <Text style={styles.viewTxt}>PhotosScreen</Text>
      <Text style={styles.viewTxt}>{JSON.stringify(photos)}</Text>
    </SafeAreaView>
  );
};

export default PhotosScreen;
