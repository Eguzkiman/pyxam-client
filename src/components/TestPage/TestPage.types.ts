import { Attempt } from 'types/BaseTypes'

export interface Props {
    attempt: Attempt;
    setAttempt: (attempt: Attempt) => void;
    className?: string;
}