import React, { useState, useCallback } from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosResponse, AxiosError} from 'axios';

import styles from './App.module.scss'
import MonacoEditor from 'react-monaco-editor';

interface RunResponse {
	result: string;
}

function App() {
	
	let [code, setCode] = useState<string>('');
	
	let [runCode, runCodeStatus] = useMutation((code): Promise<AxiosResponse<RunResponse>> => {
		return axios.post('http://localhost:3001/run_python', { code })
	})

	let submitCode = useCallback((value) => {
		runCode(value)
	}, [runCode])

	return (
		<div className={styles.App}>
			<div className={styles.App_editor}>
				<MonacoEditor
					language="javascript"
					height='100%'
					theme="vs-dark"
					value={code}
					options={{
						language: 'python',
						fontSize: 18,
					}}
					onChange={setCode}
					editorDidMount={(editor, monaco) => {
						editor.focus();
						editor.addAction({
							id: 'Run',
							label: 'Runs the current code',
							keybindings: [
								monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
							],
							run: (editor): void => {
								let value = editor.getValue()
								submitCode(value)
							}
						});
					}}
				/>
			</div>
			<div className={styles.App_result}>
				{runCodeStatus.isSuccess && runCodeStatus.data?.data.result}
			</div>
		</div>
	);
}

export default App;
