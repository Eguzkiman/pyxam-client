import React from 'react'

import { Props } from './TestPage.types'
import styles from './_TestPage.module.scss'

// import api from 'api'

import {
    Flex,
    Box,
    Divider,
    Tabs,
    TabList,
    Tab,
    Badge,
    Stack,
} from '@chakra-ui/react'

import TopNav from 'components/TopNav'

export function TestPage(props: Props) {
    const { className } = props

    return (
        <div className={`${styles.TestPage} ${className || ''}`}>
            <Flex direction="column" height="100%">
                <TopNav />
                <Box flex={1}>
                    <Flex height="100%">
                        <Box height="100%" flex={1}>
                            <Tabs
                                onChange={(index) => {
                                    /*  */
                                }}
                            >
                                <TabList>
                                    <Tab>Pregunta 1</Tab>
                                    <Tab>Pregunta 2</Tab>
                                    <Tab>Pregunta 3</Tab>
                                    <Tab>Pregunta 4</Tab>
                                    <Tab>Pregunta 5</Tab>
                                </TabList>
                            </Tabs>
                            <Box p={4}>
                                <b>Pregunta 1</b>
                            </Box>
                            <Divider />
                        </Box>
                        <Box height="100%" flex={1}>
                            Editor
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
