import React, { useState, useEffect } from 'react'

import { Props } from './TestPage.types'
import styles from './_TestPage.module.scss'
import { useHistory } from 'react-router-dom'
import Editor from 'components/Editor'
import { Flex, Box, Divider, Tabs, TabList, Tab } from '@chakra-ui/react'

import TopNav from 'components/TopNav'

export function TestPage(props: Props) {
    let history = useHistory()
    let { className, attempt, setAttempt } = props

    let [currentTab, setCurrentTab] = useState<number>(0)
    const questionFields: ['a1', 'a2', 'a3', 'a4', 'a5'] = [
        'a1',
        'a2',
        'a3',
        'a4',
        'a5',
    ]
    let currentQuestionField = questionFields[currentTab]
    let currentQuestion = attempt[currentQuestionField]
    useEffect(() => {
        if (!attempt.username) {
            history.push('/login')
        }
    }, [attempt.username, history])

    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            <Flex direction="column" height="100%">
                <TopNav attempt={attempt} />
                <Tabs onChange={setCurrentTab}>
                    <TabList>
                        <Tab>Pregunta 1</Tab>
                        <Tab>Pregunta 2</Tab>
                        <Tab>Pregunta 3</Tab>
                        <Tab>Pregunta 4</Tab>
                        <Tab>Pregunta 5</Tab>
                    </TabList>
                </Tabs>
                <Box flex={1}>
                    <Flex height="100%" direction="row">
                        <Box flex={1}>
                            <Editor
                                value={currentQuestion}
                                onChange={(code) => {
                                    setAttempt({
                                        ...attempt,
                                        [currentQuestionField]: code,
                                    })
                                }}
                                onSubmit={(code) => {}}
                            />
                            <Divider />
                        </Box>
                        <Box flex={1}>Result</Box>
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
