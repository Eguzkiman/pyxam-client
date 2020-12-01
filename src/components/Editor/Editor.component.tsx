import React from 'react'

import { Props } from './Editor.types'
import styles from './_Editor.module.scss'

import MonacoEditor from 'react-monaco-editor'

export function Editor(props: Props) {
    const { value, onChange, onSubmit, className } = props

    return (
        <div className={`${styles.Editor} ${className || ''}`}>
            <MonacoEditor
                language="javascript"
                height="100%"
                theme=""
                value={value}
                options={{
                    language: 'python',
                    fontSize: 18,
                    scrollbar: {
                        vertical: 'hidden',
                    },
                    minimap: {
                        enabled: false,
                    },
                }}
                onChange={onChange}
                editorDidMount={(editor, monaco) => {
                    editor.focus()
                    editor.addAction({
                        id: 'Run',
                        label: 'Runs the current code',
                        keybindings: [
                            monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
                        ],
                        run: (editor): void => {
                            let value = editor.getValue()
                            onSubmit(value)
                        },
                    })
                }}
            />
        </div>
    )
}

export default Editor
