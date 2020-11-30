import React from 'react'

// import { useQuery } from 'react-query'

import { Props } from './TestPage.types'
import styles from './_TestPage.module.scss'

// import api from 'api'

import TopNav from 'components/TopNav'

export function TestPage(props: Props) {
    const { className } = props

    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            <TopNav />
        </div>
    )
}

export default TestPage
