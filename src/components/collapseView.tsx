import React, {useRef} from 'react';
import {Animated, Text, View, StyleSheet, Button} from 'react-native';
import {width, height} from '../utils/_dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9F5A9',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

const CollapseView = ({children}: any) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [h, setH] = React.useState(new Animated.Value(width));
  const _show = () =>
    Animated.spring(h, {
      toValue: height,
      friction: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  console.log(fadeAnim);

  return (
    <View>
      <View style={styles.buttonRow}>
        <Button title="Ocultar" onPress={fadeOut} />
        <Button title="Mostrar" onPress={_show} />
      </View>
      <Animated.View
        style={{
          height: h,
          /* opacity: fadeAnim */
        }}>
        <Text style={styles.fadingText}>{children}</Text>
      </Animated.View>
    </View>
  );
};

export default CollapseView;
