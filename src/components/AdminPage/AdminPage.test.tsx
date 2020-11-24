import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AdminPage from './AdminPage.component';

describe('AdminPage', () => {
    it('renders', () => {
        render(<AdminPage />);
    });
});
