import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import LoginPage from './LoginPage.component';

describe('LoginPage', () => {
    it('renders', () => {
        render(<LoginPage />);
    });
});
