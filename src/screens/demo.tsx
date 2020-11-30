import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Loading} from '@components';
import {AppContext} from '@navigation/AppProvider';

export default (props: any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="DemoScreen">
      <Text style={styles.screenTitle}>DemoScreen</Text>
      <Text style={styles.viewTxt}>{JSON.stringify(props)}</Text>
    </SafeAreaView>
  );
};
