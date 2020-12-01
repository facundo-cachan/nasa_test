import React from 'react'
import { fireEvent, render, waitFor } from 'test-utils'
import { AppContext } from '@navigation/AppProvider';

import { Btn } from '@components'

const BtnTest = () => {
  const { styles } = React.useContext(AppContext),
    btnStyle = {
      buttonContainer: styles.buttonContainer,
      iconWrapper: styles.iconWrapper,
      btnTxtWrapper: styles.btnTxtWrapper,
      buttonText: styles.buttonText,
    };
  return <Btn label="Test Button" icon="camera" styles={btnStyle} backgroundColor="#58D3F7" onPress={() => {
    setTimeout(() => {
      return true
    }, Math.floor(Math.random() * 200))
  }} />
}


describe('Testing components', () => {
  test('Btn test', async () => {
    const { getByTestId, toJSON, queryByTestId } = render(<BtnTest />);
    const button = getByTestId('btn01');
    fireEvent.press(button);
    await waitFor(() => expect(queryByTestId('btn01')).toBeTruthy());
    expect(toJSON()).toMatchSnapshot()
  })
})

