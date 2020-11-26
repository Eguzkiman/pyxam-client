import React from 'react';

import { Props } from './HomePage.types';
import styles from './_HomePage.module.scss';

export class HomePage extends React.Component<Props> {
    static displayName = 'HomePage';

    render(): JSX.Element {
        const { className } = this.props;

        return (
            <div className={`${styles.HomePage} ${className || ''}`}>
                This is HomePage, a very nice, newly generated component.
            </div>
        );
    }
}

export default HomePage;
