export interface Props {
    username: string | null;
    onLogin: (username: string) => void;
    className?: string;
}