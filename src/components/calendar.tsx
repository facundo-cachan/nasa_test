import React from 'react';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {width} from '@utils/_dimensions';
const MyCalendar = (props: any) => (
  <CalendarList
    // Initially visible month. Default = Date()
    current={Date()}
    // Enable horizontal scrolling, default = false
    horizontal={true}
    // Enable paging on horizontal, default = false
    pagingEnabled={true}
    // Set custom calendarWidth.
    calendarWidth={width}
    // Handler which gets executed on day press. Default = undefined
    /*
    onDayPress={(day: any) => {
      console.log('selected day', day);
    }}
    */
    {...props}
  />
);

export default MyCalendar;
