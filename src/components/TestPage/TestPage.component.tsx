import React from 'react';

import { useQuery } from 'react-query'

import { Props } from './TestPage.types';
import styles from './_TestPage.module.scss';

import api from 'api'

import { Test } from 'types/BaseTypes'

export function TestPage(props: Props) {
    const { className } = props;

    const { isLoading, error, data } = useQuery('repoData', () => {
        return api.get('tests');
    })

    if (error) {
        return <p>Error!</p>
    }

    if (isLoading || !data) {
        return <p>Loading...</p>
    }

    let currentTest = (data.data as Test[])[0];

    if (!currentTest) return <div></div>

    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            Test name: {currentTest.name}
            questions:
            <ol>
                {
                    currentTest.questions.map((q) => (
                        <li>{q.title}</li>
                    ))
                }
            </ol>
        </div>
    );
}

export default TestPage;
