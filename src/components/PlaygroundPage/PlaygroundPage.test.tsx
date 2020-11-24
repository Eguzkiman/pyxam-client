import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PlaygroundPage from './PlaygroundPage.component';

describe('PlaygroundPage', () => {
    it('renders', () => {
        render(<PlaygroundPage />);
    });
});
