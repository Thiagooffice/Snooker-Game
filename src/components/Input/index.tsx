import React, { ReactNode } from 'react'
import { Container } from './style'

interface IInputProps{
    label?: string;
    type?: string;
    error: ReactNode;
    register: any
}

export default function Input({label, type, error, register}: IInputProps) {
    return (
        <Container>
        <label>{label}</label>
            <input type={type || "text"}  {...register} />
        <span className='errorMessage' >{error}</span>
        </Container>
    )
}