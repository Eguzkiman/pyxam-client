---
to: <%= componentDir %>/<%= name %>.component.tsx
---
import React from 'react';

import { Props } from './<%= name %>.types';
import styles from './_<%= name %>.module.scss';

export class <%= name %> extends React.Component<Props> {
    static displayName = '<%= name %>';

    render(): JSX.Element {
        const { className } = this.props;

        return (
            <div className={`${styles.<%= name %>} ${className || ''}`}>
                This is <%= name %>, a very nice, newly generated component.
            </div>
        );
    }
}

export default <%= name %>;
