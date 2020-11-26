import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

import { ChakraProvider } from "@chakra-ui/react"

import AdminPage from 'components/AdminPage'
import LoginPage from 'components/LoginPage'
import PlaygroundPage from 'components/PlaygroundPage'
import TestPage from 'components/TestPage'

import { User } from 'types/BaseTypes';

import styles from './App.module.scss'

function App() {

	let [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		let userStr = localStorage.getItem('user');
		if (!userStr) return;

		let user = JSON.parse(userStr) as User;

		setUser(user)
	}, [])

	function onLogin(user: User) {
		setUser(user)
		localStorage.setItem('user', JSON.stringify(user));
	}

	return (
		<ChakraProvider>
			<div className={styles.App}>
				<Router>
					<Switch>
						<Route path="/login">
							<LoginPage
								user={user}
								onLogin={onLogin}
							/>
						</Route>
						{user && (
							<React.Fragment>
								<Route path="/admin">
									<AdminPage />
								</Route>
								<Route path="/playground">
									<PlaygroundPage />
								</Route>
								<Route path="/test">
									<TestPage
										user={user}
									/>
								</Route>
							</React.Fragment>
						)}
					</Switch>
					{/* <Redirect to='/login' /> */}
				</Router>
			</div>
		</ChakraProvider>
	)
}

export default App;
