import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from 'react-router-dom'

import AdminPage from 'components/AdminPage'
import LoginPage from 'components/LoginPage'
import PlaygroundPage from 'components/PlaygroundPage'
import TestPage from 'components/TestPage'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/admin">
					<AdminPage />
				</Route>
				<Route path="/login">
					<LoginPage />
				</Route>
				<Route path="/playground">
					<PlaygroundPage />
				</Route>
				<Route path="/test">
					<TestPage />
				</Route>
			</Switch>
			{/* <Redirect to='/login' /> */}
		</Router>
	)
}

export default App;
