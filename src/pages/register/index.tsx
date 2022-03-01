import { Container, FormContainer, ContentForm, ImageRight } from './style'
import Logo from '../../components/LogoElement/Logo'
import ImageCoins from '../../../public/images/coins.svg'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify'
import Button from '../../components/ButtomForm/ButtonForm'
import Input from '../../components/Input';
import { useState } from 'react'
import InputPassword from '../../components/InputPassword';
import Router from 'next/router'

const lowercase = /(?=.*[a-z])/;
const uppercase = /(?=.*[A-Z])/
const numeric = /(?=.*[0-9])/
const specialCharacter = /(?=.*[!@#$%^&*])/

const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    password: yup.string()
        .required('Senha obrigatório!')
        .min(8, 'Minimo 8 caracteres obrigatorio')
        .matches(uppercase, 'É obrigatório letra maiúscula')
        .matches(lowercase, 'É obrigatório letra minúscula')
        .matches(numeric, 'É obrigatório um número')
        .matches(specialCharacter, 'É obrigatório um caractere espcial'),
    email: yup.string().required("O email é obrigatório"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'A senha deverá ser a mesma')
        .required('Confirmar Senha Obrigatório')
});

interface IFormInputs {
    name: string
    password: string
    email: string
    confirmPassword: string
}

export default function Login() {

    const [showPassword, setShowPassword] = useState(false)

    const handlePassword = () => setShowPassword(!showPassword)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    function onSubmit(userData: IFormInputs) {
        delete userData.confirmPassword
        console.log(userData);
        toast.success("Cadastro efetuado com sucesso!")
        setTimeout(() => {
            Router.push('/login')
        }, 4000)
    }

    return (
        <Container>
            <FormContainer>
                <Logo />
                <ContentForm onSubmit={handleSubmit(onSubmit)} >

                    <Input
                        type='text'
                        label='Nome'
                        error={errors.name?.message}
                        register={{ ...register("name", { required: true }) }}
                    />

                    <Input
                        type='email'
                        label='Email'
                        error={errors.email?.message}
                        register={{ ...register("email", { required: true }) }}
                    />

                    <InputPassword
                        label='Senha'
                        error={errors.password?.message}
                        register={{ ...register("password", { required: true }) }}
                    />

                    <InputPassword 
                    error={errors.confirmPassword?.message}
                    label="Confirmar Senha"
                    register={{ ...register("confirmPassword", { required: true }) }}
                    />

                    <div className='ForgotPassword'>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>Confirmo que eu tenho pelo menos 18 anos de idade e que eu li e entendi o <strong>Acordo de Licença do Usuário Final</strong> e a <strong>Política de Privacidade.</strong></p>
                        </div>
                    </div>

                    <Button type="submit">
                        Criar conta
                    </Button>

                </ContentForm>
            </FormContainer>

            <ImageRight>
                <Image src={ImageCoins} width={1000} height={1000} />
            </ImageRight>
        </Container>
    )
}