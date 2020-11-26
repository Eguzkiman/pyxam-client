import { User } from 'types/BaseTypes';

export interface Props {
    user: User | null;
    onLogin: (user: User) => void;
    className?: string;
}