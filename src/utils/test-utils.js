import React from 'react'
import { render } from '@testing-library/react-native';
import { AppProvider } from '@navigation/AppProvider';

const AllTheProviders = ({ children }) => {
    return <AppProvider>{children}</AppProvider>;
};

const customRender = (ui, options) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
