import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ThankyouPage from './ThankyouPage.component';

describe('ThankyouPage', () => {
    it('renders', () => {
        render(<ThankyouPage />);
    });
});
