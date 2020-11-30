import React, { useState, useMemo } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

import AdminPage from 'components/AdminPage'
import LoginPage from 'components/LoginPage'
import PlaygroundPage from 'components/PlaygroundPage'
import TestPage from 'components/TestPage'

import styles from './App.module.scss'

function App() {
    let userFromSession = useMemo(() => {
        return localStorage.getItem('user')
    }, [])

    let [username, setUsername] = useState<string | null>(userFromSession)

    function onLogin(username: string) {
        setUsername(username)
        localStorage.setItem('user', username)
    }

    return (
        <ChakraProvider>
            <div className={styles.App}>
                <Router>
                    <Switch>
                        <Route path="/login">
                            <LoginPage username={username} onLogin={onLogin} />
                        </Route>
                        {username && (
                            <React.Fragment>
                                <Route path="/admin">
                                    <AdminPage />
                                </Route>
                                <Route path="/playground">
                                    <PlaygroundPage />
                                </Route>
                                <Route path="/test">
                                    <TestPage username={username} />
                                </Route>
                            </React.Fragment>
                        )}
                        <Route>
                            <Redirect to="/login" />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ChakraProvider>
    )
}

export default App
