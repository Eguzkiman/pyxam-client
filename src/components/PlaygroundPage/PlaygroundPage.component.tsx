import React, { useState, useCallback } from 'react';
import { useMutation } from 'react-query';
import axios, { AxiosResponse } from 'axios';

import MonacoEditor from 'react-monaco-editor';

import { Props, RunResponse } from './PlaygroundPage.types';
import styles from './_PlaygroundPage.module.scss';

export function PlaygroundPage(props: Props) {

    let [code, setCode] = useState<string>('');

    let [runCode, runCodeStatus] = useMutation((code): Promise<AxiosResponse<RunResponse>> => {
        return axios.post('http://localhost:3001/run_python', { code })
    })

    let submitCode = useCallback((value) => {
        runCode(value)
    }, [runCode])

    return (
        <div className={styles.PlaygroundPage}>
            <div className={styles.PlaygroundPage_editor}>
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
            <div className={styles.PlaygroundPage_result}>
                {runCodeStatus.isSuccess && runCodeStatus.data?.data.result}
            </div>
        </div>
    );


}

export default PlaygroundPage;
