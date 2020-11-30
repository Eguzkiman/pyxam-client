import React, { useState, useEffect } from 'react';

import { useMutation } from 'react-query';
import { User } from 'types/BaseTypes'

import api from 'api';

import { useHistory } from 'react-router-dom'

import {
    Input,
    Button,
    Stack,
    Container,
    FormControl,
    FormLabel,
    FormHelperText,
    Heading
} from "@chakra-ui/react"

import { Props } from './LoginPage.types';
import styles from './_LoginPage.module.scss';

export function LoginPage(props: Props) {
    let history = useHistory()
    let [userName, setUserName] = useState<string>('')

    useEffect(() => {
        let userStr = localStorage.getItem('user');

        if (userStr) {
            history.push('/test');
            return;
        };
    }, [history])

    let [onSubmit, submitAction] = useMutation((): Promise<void> => {
        return api.post('users', {
            name: userName
        }).then(({ data }: { data: User }) => {
            props.onLogin(data)
            history.push('/test')
        })
    });

    const { className } = props;

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
                                value={userName}
                                onChange={ev => setUserName(ev.currentTarget.value)}
                                placeholder="ie. Eguzkiman"
                                minlength="3"
                                maxlength="20"
                                autocomplete="off" 
                            />
                            <Button
                                type="submit"
                                isLoading={submitAction.isLoading}
                                loadingText='Comenzando'
                            >
                                Comenzar
                        </Button>
                        </Stack>
                        <FormHelperText>
                            Porfa usa tu nombre de vscode o de codewars
                        </FormHelperText>
                    </FormControl>
                </form>
            </Container>
        </div>
    );
}

export default LoginPage;
