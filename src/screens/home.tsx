import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Loading, MyCalendar, Btn} from '@components';
import {AppContext} from '@navigation/AppProvider';
import formatDate from '@utils/_formatDate';

const HomeScreen = ({navigation}:any) => {
  const {styles} = React.useContext(AppContext),
    [loading, setLoading] = React.useState(true),
    [text, setText] = React.useState(formatDate(Date())),
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container} testID="HomeScreen">
      <MyCalendar
        onDayPress={(day: any) => {
          setText(day.dateString);
        }}
      />
      <Btn
        onPress={() => console.log('Btn Pressed')}
        label="Button"
        icon="car"
        styles={btnStyle}
      />
      <Text>{text}</Text>
      <Btn
        onPress={() => {
          navigation.navigate('Rovers', {
            id: 'spirit',
            img: null,
            cameras: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
          });
        }}
        label="Go Rovers"
        icon="car"
        styles={btnStyle}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
