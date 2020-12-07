import React from 'react';
import {Alert, Modal, TouchableHighlight} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import Icon from 'react-native-dynamic-vector-icons';

import CopyRight from './copyRight';
import {width} from '@utils/_dimensions';

const styles = {
  fabBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 100,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

const MyCalendar = (props: any) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <>
      <TouchableHighlight
        style={[styles.fabBtn, {display: modalVisible ? 'none' : 'flex'}]}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Icon
          type="Ionicons"
          name="calendar-outline"
          color="#000"
          size={30}
          style={{padding: 13}}
        />
      </TouchableHighlight>
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="fullScreen"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <CalendarList
          testID="calendar"
          style={{
            width,
            height: width,
            marginTop: 20,
          }}
          current={Date()}
          horizontal={true}
          pagingEnabled={true}
          enableSwipeMonths={true}
          {...props}
        />
        <CopyRight />
        <TouchableHighlight
          style={[styles.fabBtn, {display: !modalVisible ? 'none' : 'flex'}]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Icon
            type="Ionicons"
            name="eye-off-outline"
            color="#000"
            size={30}
            style={{padding: 13}}
          />
        </TouchableHighlight>
      </Modal>
    </>
  );
};

export default MyCalendar;
