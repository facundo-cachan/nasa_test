import React from 'react';
import {SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Loading, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';

const ProfileScreen = () => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };

  React.useEffect(() => {
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
