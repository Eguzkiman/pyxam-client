import React from 'react';

import { Props } from './LoginPage.types';
import styles from './_LoginPage.module.scss';

export class LoginPage extends React.Component<Props> {
    static displayName = 'LoginPage';

    render(): JSX.Element {
        const { className } = this.props;

        return (
            <div className={`${styles.LoginPage} ${className || ''}`}>
                This is LoginPage, a very nice, newly generated component.
            </div>
        );
    }
}

export default LoginPage;
