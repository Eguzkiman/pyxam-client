import React, { useState, useCallback } from 'react';
import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';
import api from 'api'

import MonacoEditor from 'react-monaco-editor';

import { Props, RunResponse } from './PlaygroundPage.types';
import styles from './_PlaygroundPage.module.scss';

export function PlaygroundPage(props: Props) {

    let [code, setCode] = useState<string>('print "Hello World"');

    let [runCode, runCodeStatus] = useMutation((code): Promise<AxiosResponse<RunResponse>> => {
        return api.post('run_python', { code })
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
                    theme=""
                    value={code}
                    options={{
                        language: 'python',
                        fontSize: 18,
                        minimap: {
                            enabled: false
                        }
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
