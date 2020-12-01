import { Attempt } from 'types/BaseTypes'

export interface Props {
    attempt: Attempt
    onRunCode: () => void
    onSubmitCode: () => void
    className?: string
}
