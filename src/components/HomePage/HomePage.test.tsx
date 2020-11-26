import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HomePage from './HomePage.component';

describe('HomePage', () => {
    it('renders', () => {
        render(<HomePage />);
    });
});
