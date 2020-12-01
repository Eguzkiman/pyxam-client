import React from 'react'

import { Props } from './ThankyouPage.types'
import styles from './_ThankyouPage.module.scss'

import { Heading, Container } from '@chakra-ui/react'

export function ThankyouPage(props: Props) {
    const { className } = props

    return (
        <div className={`${styles.ThankyouPage} ${className || ''}`}>
            <Container>
                <br />
                <br />
                <br />
                <Heading as="h1" size="3xl">
                    Ya está! Ya tengo tu examen 🎉
                    <br />
                    <br />
                    Nos vemos el jueves!
                </Heading>
            </Container>
        </div>
    )
}

export default ThankyouPage
