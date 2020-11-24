import React from 'react';

import { Props } from './TestPage.types';
import styles from './_TestPage.module.scss';

export class TestPage extends React.Component<Props> {
    static displayName = 'TestPage';

    render(): JSX.Element {
        const { className } = this.props;

        return (
            <div className={`${styles.TestPage} ${className || ''}`}>
                This is TestPage, a very nice, newly generated component.
            </div>
        );
    }
}

export default TestPage;
