import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

const HomeScreen = ({navigation}: any) => {
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
    <SafeAreaView style={styles.container} testID="HomeScreen">
      <View style={styles.viewCentered}>
        <Text
          style={styles.screenTitle}
          onPress={navigation.navigate('Rovers')}>
          HomeScreen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
