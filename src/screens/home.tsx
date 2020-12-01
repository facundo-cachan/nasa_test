import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Loading, MyCalendar} from '@components';
import {AppContext} from '@navigation/AppProvider';

const HomeScreen = () => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [text, setText] = React.useState();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="HomeScreen">
      <MyCalendar
        onPress={(day: any) => {
          setText(day.dateString);
        }}
      />
      <Text>{text}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
