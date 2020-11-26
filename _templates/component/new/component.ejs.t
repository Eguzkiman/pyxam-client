---
to: <%= componentDir %>/<%= name %>.component.tsx
---
import React from 'react';

import { Props } from './<%= name %>.types';
import styles from './_<%= name %>.module.scss';

export function <%= name %> (props: Props) {
    const { className } = this.props;

    return (
        <div className={`${styles.<%= name %>} ${className || ''}`}>
            This is <%= name %>, a very nice, newly generated component.
        </div>
    );
}

export default <%= name %>;
