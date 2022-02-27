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


const schema = yup.object({
    name: yup.string().required("O nome é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("A senha é obrigatória"),
    email: yup.string().required("O email é obrigatório"),
    confirmPassword: yup.string().required("A confirmação é obrigatório").oneOf([yup.ref("password")],"As senhas devem ser iguais"),
}).required();

interface IFormInputs {
    name: string
    password: string
    email: string
    confirmPassword:string
}

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });

    function onSubmit(userData: IFormInputs) {
        console.log(userData);
        toast.success("Cadastro efetuado com sucesso!")
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

                    <Input
                        type='password'
                        label='Senha'
                        error={errors.password?.message}
                        register={{ ...register("password", { required: true }) }}
                    />

                    <Input
                        type='password'
                        label='Confirmar senha'
                        error={errors.confirmPassword?.message}
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