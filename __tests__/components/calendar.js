import React from 'react'
import { render } from 'test-utils'

import { MyCalendar } from '@components'

const MyCalendarTest = () => {
    const [, setDay] = React.useState();
    return <MyCalendar
        onPress={(day) => {
            setDay(day.dateString);
        }}
    />
}


describe('Testing components', () => {
    test('Calendar test', async () => {
        const { toJSON } = render(<MyCalendarTest />);
        expect(toJSON()).toMatchSnapshot()
    })
})

