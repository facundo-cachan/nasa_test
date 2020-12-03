import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const txt = {fontSize: 16, color: '#fff'};

const Dots = () => (
  <View
    style={{
      width: 6,
      height: 6,
      marginHorizontal: 3,
      backgroundColor: txt.color,
    }}
  />
);

const Skip = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={txt}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={txt}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={txt}>Done</Text>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}: any) => {
  navigation.setOptions({tabBarVisible: false});
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Rovers')}
      onDone={() => navigation.navigate('Rovers')}
      pages={[
        {
          backgroundColor: '#000',
          image: <Image source={require('@assets/images/background.png')} />,
          title: 'NASA',
          subtitle: 'Mars Exploration Program',
        },
        {
          backgroundColor: '#FAAC58',
          image: <Image source={require('@assets/images/background2.jpg')} />,
          title: 'Rovers',
          subtitle: 'From Robots to Humans',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('@assets/images/background3.jpg')} />,
          title: 'MEP',
          subtitle: 'Mars Exploration Program',
        },
      ]}
    />
  );
};

export default HomeScreen;
