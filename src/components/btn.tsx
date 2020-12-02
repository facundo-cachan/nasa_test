import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

const Btn = ({
  label,
  icon,
  color,
  size,
  backgroundColor,
  textColor,
  styles,
  ...rest
}: {
  label: string;
  icon: string;
  color: string;
  size: number;
  textColor: string;
  styles: any;
  backgroundColor: string;
}) => {
  const bgColor = backgroundColor || '#000';

  return (
    <TouchableOpacity
      testID="btn01"
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <Icon
          type="FontAwesome5"
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
