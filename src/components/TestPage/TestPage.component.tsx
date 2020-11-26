import React from 'react';

import { useQuery } from 'react-query'

import { Props } from './TestPage.types';
import styles from './_TestPage.module.scss';

import api from 'api'

export function TestPage(props: Props) {
    const { className } = props;

    const { isLoading, error, data } = useQuery('repoData', () => {
        return api.get('tests');
    })

    console.log({
        isLoading,
        error,
        data
    })
    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            This is TestPage, a very nice, newly generated component.
        </div>
    );
}

export default TestPage;
