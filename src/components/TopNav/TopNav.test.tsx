import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TopNav from './TopNav.component';

describe('TopNav', () => {
    it('renders', () => {
        render(<TopNav />);
    });
});
