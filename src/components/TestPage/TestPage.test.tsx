import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TestPage from './TestPage.component';

describe('TestPage', () => {
    it('renders', () => {
        render(<TestPage />);
    });
});
