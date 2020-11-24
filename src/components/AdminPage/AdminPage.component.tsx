import React from 'react';

import { Props } from './AdminPage.types';
import styles from './_AdminPage.module.scss';


export class AdminPage extends React.Component<Props> {
    static displayName = 'AdminPage';

    render(): JSX.Element {
        const { className } = this.props;

        return (
            <div className={`${styles.AdminPage} ${className || ''}`}>
            </div>
        );
    }
}

export default AdminPage;
