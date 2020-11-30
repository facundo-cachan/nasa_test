import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {AppContext} from '@navigation/AppProvider';

const Btn = ({
  label,
  icon,
  iconType,
  color,
  size,
  backgroundColor,
  textColor,
  ...rest
}: {
  label: string;
  iconType: string;
  icon: string;
  color: string;
  size: number;
  textColor: string;
  backgroundColor: string;
}) => {
  const bgColor = backgroundColor || '#000',
    {styles} = React.useContext(AppContext);
  return (
    <TouchableOpacity
      testID="btn01"
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <Icon
          type={iconType || 'FontAwesome5'}
          name={icon || 'info-circle'}
          color={color || '#F7D358'}
          size={size || 22}
        />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: textColor || '#BCA9F5'}]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Btn;
