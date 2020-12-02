import React from 'react';
import userEvent from '@testing-library/user-event';
import { fireEvent, cleanup, render, waitFor, act } from 'test-utils';

import RoversScreen from '@screens/rovers';
jest.useFakeTimers();
const navigation = {
    navigate: jest.fn(),
},
    params = { id: 'spirit', camera: 'fhaz' };

describe('Testing Screens', () => {
    afterEach(cleanup);
    test('Rovers test', async () => {
        jest.runOnlyPendingTimers();
        const { baseElement, getByTestId } = render(
            <RoversScreen navigation={navigation} route={params} />,
        );
        // expect(getByTestId('RoversScreen')).toBeTruthy();
        expect(baseElement).toMatchSnapshot();
    });
});
