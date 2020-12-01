import React from 'react'

import { useHistory } from 'react-router-dom'

import {
    Input,
    Button,
    Stack,
    Container,
    FormControl,
    FormLabel,
    FormHelperText,
    Heading,
} from '@chakra-ui/react'

import { Props } from './LoginPage.types'
import styles from './_LoginPage.module.scss'

export function LoginPage(props: Props) {
    let history = useHistory()

    const { className, attempt, setAttempt } = props

    function onSubmit() {
        history.push('/test')
    }

    return (
        <div className={`${styles.LoginPage} ${className || ''}`}>
            <br />
            <br />
            <br />
            <Container>
                <Heading as="h1" size="3xl">
                    Aló! Soy tu examen de progra (:
                </Heading>
                <br />
                <br />
                <form
                    autoComplete="off"
                    onSubmit={(ev) => {
                        ev.preventDefault()
                        onSubmit()
                    }}
                >
                    <FormControl id="username">
                        <FormLabel>Pon aquí tu nombre de usuario pls</FormLabel>
                        <Stack spacing={4}>
                            <Input
                                required
                                value={attempt.username}
                                onChange={(ev) =>
                                    setAttempt({
                                        ...attempt,
                                        username: ev.currentTarget.value,
                                    })
                                }
                                placeholder="ie. Eguzkiman"
                                minLength={3}
                                maxLength={20}
                                autocomplete="off"
                            />
                            <Button type="submit">Comenzar</Button>
                        </Stack>
                        <FormHelperText>
                            Porfa usa tu nombre de vscode o de codewars
                        </FormHelperText>
                    </FormControl>
                </form>
            </Container>
        </div>
    )
}

export default LoginPage
