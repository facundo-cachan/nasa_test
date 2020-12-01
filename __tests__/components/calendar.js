import React from 'react'
import { fireEvent, render, waitFor } from 'test-utils'

import { MyCalendar } from '@components'

const MyCalendarTest = () => {
    const [day, setDay] = React.useState();
    return <MyCalendar
        onPress={(day) => {
            setDay(day.dateString);
        }}
    />
}


describe('Testing components', () => {
    test('Calendar test', async () => {
        const { getByTestId, toJSON, queryByTestId } = render(<MyCalendarTest />);
        expect(toJSON()).toMatchSnapshot()
    })
})

