import { ReactNode, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Container } from './style'

interface IInputProps {
    label?: string;
    error: ReactNode;
    register?: any
}

export default function InputPassword({ label, error, register }: IInputProps) {

    const [showPassword, setShowPassword] = useState(false)

    const handlePassword = () => setShowPassword(!showPassword)

    return (
            <Container>
                <label>{label}</label>
                <input type={showPassword ? "text" : "password"}  {...register} />
                <span className='errorMessage' >{error}</span>
                <div className="iconPassword">
                    {
                        showPassword ? (
                            <BiHide color="#ffffff" size={20} onClick={handlePassword} />
                        ) : (
                            <BiShow color="#ffffff" size={20} onClick={handlePassword} />
                        ) 
                    }
                </div>
            </Container>
       
    )
}