import React from 'react';

import { Props } from './TestPage.types';
import styles from './_TestPage.module.scss';

export function TestPage(props: Props) {

    const { className } = props;
    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            This is TestPage, a very nice, newly generated component.
        </div>
    );
}

export default TestPage;
