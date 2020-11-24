---
to: <%= componentDir %>/<%= name %>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import <%= name %> from './<%= name %>.component';

describe('<%= name %>', () => {
    it('renders', () => {
        render(<<%= name %> />);
    });
});
