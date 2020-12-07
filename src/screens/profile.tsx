import React from 'react';
import {SafeAreaView,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

const ProfileScreen = () => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [data, setData] = React.useState([]),
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };

  React.useEffect(() => {
    AsyncStorage.getAllKeys().then((keys: any) =>
      setData(AsyncStorage.multiGet(keys)),
    );
    setTimeout(() => {
      setLoading(!loading);
    }, 300);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="ProfileScreen">
      <Btn
        onPress={async () => await AsyncStorage.clear()}
        label="Empty local storage"
        icon="trash-alt"
        styles={btnStyle}
      />
      {Object.keys(data).map((d: any, k: any) => (
        <Text key={k}>{JSON.stringify(data[d], null, 2)}</Text>
      ))}
    </SafeAreaView>
  );
};

export default ProfileScreen;
