import React, {Component} from 'react';
import {PanResponder, Animated, View, Image, Text} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  card: {
    height: 500,
    width: 350,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  cardImage: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  cardText: {
    margin: 20,
  },
  cardTextMain: {
    textAlign: 'left',
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  cardTextSecondary: {
    textAlign: 'left',
    fontSize: 15,
    color: 'grey',
    backgroundColor: 'transparent',
  },
};

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
    };
  }

  UNSAFE_componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.state.pan.x, dy: this.state.pan.y}],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, {vx, vy}) => {
        if (this.state.pan.x._value < -150) {
          this.props.onSwipe(this.props.index);
        } else if (this.state.pan.x._value > 150) {
          this.props.onSwipe(this.props.index);
        } else {
          Animated.spring(this.state.pan, {
            toValue: 0,
          }).start();
        }
      },
    });
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners();
    this.state.pan.y.removeAllListeners();
  }

  getMainCardStyle() {
    let {pan} = this.state;
    return [
      styles.mainCard,
      {position: 'absolute'},
      {left: -175},
      {top: -250},
      {
        transform: [
          {translateX: pan.x},
          {translateY: pan.y},
          {
            rotate: pan.x.interpolate({
              inputRange: [-150, 0, 150],
              outputRange: ['-20deg', '0deg', '20deg'],
            }),
          },
        ],
      },
      {
        opacity: pan.x.interpolate({
          inputRange: [-150, 0, 150],
          outputRange: [0.5, 1, 0.5],
        }),
      },
    ];
  }

  render() {
    let {picture, name, email} = this.props;
    return (
      <Animated.View
        style={this.getMainCardStyle()}
        {...this.panResponder.panHandlers}>
        <View style={styles.card}>
          <Image source={{uri: picture.large}} style={styles.cardImage} />
          <View style={styles.cardText}>
            <Text style={styles.cardTextMain}>
              {name.first} {name.last}
            </Text>
            <Text style={styles.cardTextSecondary}>{email}</Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}
