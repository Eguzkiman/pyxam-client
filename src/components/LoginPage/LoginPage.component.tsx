import React, { useState } from 'react';

import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { User } from 'types/BaseTypes'

import {
    useHistory
} from 'react-router-dom'

import {
    Input,
    Button,
    ButtonGroup,
    Container,
    FormControl,
    FormLabel,
    FormHelperText
} from "@chakra-ui/react"

import { Props } from './LoginPage.types';
import styles from './_LoginPage.module.scss';

export function LoginPage(props: Props) {
    let history = useHistory()
    let [userName, setUserName] = useState<string>('')
    let [onSubmit, submitAction] = useMutation((): Promise<void> => {
        return axios.post('http://localhost:3001/users', {
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
            <br />
            <Container>
                <FormControl id="email">
                    <FormLabel>Elige tu nombre de usuario</FormLabel>
                    <ButtonGroup variant="outline" spacing="6">
                        <Input
                            value={userName}
                            onChange={ev => setUserName(ev.currentTarget.value)}
                            placeholder="ie. Eguzkiman"
                        />
                        <Button
                            onClick={() => onSubmit()}
                            isLoading={submitAction.isLoading}
                            loadingText='Dándole'
                        >
                            Dale
                        </Button>
                    </ButtonGroup>
                    <FormHelperText>Este será tu nombre por siempre en progra</FormHelperText>
                </FormControl>
            </Container>
        </div>
    );
}

export default LoginPage;
