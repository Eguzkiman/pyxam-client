import React, { useState, useEffect } from 'react'

import { Props } from './TestPage.types'
import styles from './_TestPage.module.scss'
import { useHistory } from 'react-router-dom'
import { Flex, Box, Divider, Tabs, TabList, Tab } from '@chakra-ui/react'

import TopNav from 'components/TopNav'

export function TestPage(props: Props) {
    let history = useHistory()
    let { className, attempt } = props

    let [currentTab, setCurrentTab] = useState<number>(0)
    let questions = [attempt.a1, attempt.a2, attempt.a3, attempt.a4, attempt.a5]

    useEffect(() => {
        if (!attempt.username) {
            history.push('/login')
        }
    }, [attempt.username, history])

    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            <Flex direction="column" height="100%">
                <TopNav attempt={attempt} />
                <Box flex={1}>
                    <Flex height="100%">
                        <Box height="100%" flex={1}>
                            <Tabs onChange={setCurrentTab}>
                                <TabList>
                                    <Tab>Pregunta 1</Tab>
                                    <Tab>Pregunta 2</Tab>
                                    <Tab>Pregunta 3</Tab>
                                    <Tab>Pregunta 4</Tab>
                                    <Tab>Pregunta 5</Tab>
                                </TabList>
                            </Tabs>
                            <pre>{questions[currentTab]}</pre>
                            <Divider />
                        </Box>
                        <Box height="100%" flex={1}>
                            Result
                        </Box>
                    </Flex>
                </Box>
            </Flex>

            {/* <Flex height="100%">
                <Box bg="tomato" height="100%" flex={1}>
                    sdf
                </Box>
            </Flex> */}
        </div>
    )
}

export default TestPage
