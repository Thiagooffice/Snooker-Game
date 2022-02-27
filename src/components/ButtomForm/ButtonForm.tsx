import { ButtonForm } from './style'

interface IButtonProps{
    children: string,
    type: string
}

export default function Button({children, type}: IButtonProps) {
    return (
        <ButtonForm type={type}>
            {children}
        </ButtonForm>
    )
}

