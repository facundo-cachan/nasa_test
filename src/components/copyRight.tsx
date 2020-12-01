import React from 'react';
import {View, Text} from 'react-native';

const styles = {
    centeredView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      color: '#FF0000',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
  today = new Date(),
  year = today.getFullYear(),
  CopyRight = () => (
    <View style={styles.centeredView}>
      <Text style={styles.textStyle}>Facundo Cachan &copy;{year}</Text>
    </View>
  );

export default CopyRight;
