export interface Props {
    value: string
    onChange: (value: string) => void
    onSubmit: (value: string) => void
    className?: string
}
