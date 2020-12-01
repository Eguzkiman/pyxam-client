import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Editor from './Editor.component';

describe('Editor', () => {
    it('renders', () => {
        render(<Editor />);
    });
});
