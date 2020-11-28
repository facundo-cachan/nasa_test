import React from 'react';
import {Text, View, Platform} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

type Props = {
  children: any;
  icon: string;
  styled: any;
};
const iconText = ({children, icon, styled}: Props) => (
  <View style={{flexDirection: 'row'}}>
    <Icon name={icon} type="Ionicons" size={styled.size} color={styled.color} />
    <Text
      style={[
        styled && styled ? styled : {},
        Platform.select({
          ios: {
            top: styled && styled.top ? styled.top - 3 : -3,
            fontSize: styled && styled.fontSize ? styled.fontSize : 20,
            marginLeft:
              styled && styled.marginLeft ? styled.marginLeft + 10 : 10,
          },
          android: {
            top: styled && styled.top ? styled.top - 3 : -3,
            fontSize: styled && styled.fontSize ? styled.fontSize : 20,
            marginLeft:
              styled && styled.marginLeft ? styled.marginLeft + 10 : 10,
          },
        }),
      ]}>
      {children}
    </Text>
  </View>
);

export default iconText;
