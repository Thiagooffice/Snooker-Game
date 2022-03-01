import { Container, FormContainer, ContentForm } from './style'
import Logo from '../../components/LogoElement/Logo'
import ImageCoins from '../../../public/images/coins.svg'
import { MdOutlineEmail } from 'react-icons/md'
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from 'react-toastify'
import Button from '../../components/ButtomForm/ButtonForm'
import Link from 'next/link'
import Input from '../../components/Input'
import { ImageRight } from '../register/style'
import Router from 'next/router'
import InputPassword from '../../components/InputPassword';


const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("A senha é obrigatória"),
}).required();


interface IFormInputs {
    name: string
    password: string
}

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    function onSubmit(userData: IFormInputs) {
        console.log(userData);
        toast.success("Login efeituado com sucesso!")
        setTimeout(() => {
            Router.push('/tableplay')
        }, 4000)
    }

    const icons = [
        { icon: <MdOutlineEmail size={30} /> },
        { icon: <ImFacebook color='#1976D2' size={30} /> },
        { icon: <FcGoogle size={30} /> },
        { icon: <FaApple size={30} /> },
    ]

    return (
        <Container>
            <FormContainer>
                <Logo />
                <ContentForm onSubmit={handleSubmit(onSubmit)} >

                    <Input
                        type='text'
                        label='Login'
                        error={errors.name?.message}
                        register={{ ...register("name", { required: true }) }}
                    />

                    <InputPassword
                        label='Senha'
                        error={errors.password?.message}
                        register={{ ...register("password", { required: true }) }}
                    />

                    <div className='ForgotPassword'>
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>Lembrar de mim</p>
                        </div>
                        <div className="perguntar">
                            <p>Esqueceu a senha?</p>
                        </div>
                    </div>

                    <Button type='submit'>
                        LOGIN
                    </Button>

                    <div className='registerNow'>
                        <div></div>
                        <Link href="/register">
                            <p>cadastre-se agora</p>
                        </Link>
                        <div></div>
                    </div>

                    <div className='containerIcons'>
                        {icons.map((item, index) => (
                            <div key={index} className="icons">
                                {item.icon}
                            </div>
                        ))}
                    </div>

                </ContentForm>
            </FormContainer>

            <ImageRight>
                <Image src={ImageCoins} width={1000} height={1000} />
            </ImageRight>
        </Container>
    )
}