import styled from 'styled-components'
import mesaPost from '../../../public/images/fundoMesa.png'




export const Container = styled.main`
    background-image: url("/images/fundoMesa.png");
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
`

export const FormContainer = styled.div`
    padding-top: 40px;
    background-color: transparent;
    width: 60%;
    margin: 0 auto;

    @media(max-width: 450px){
        width: 90%;
    }

    @media(max-width: 670px){
        width: 80%;
    }
    @media(max-width: 300px){
        width: 95%;
    }
`
export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 85%;
    margin-left: 7vw;
    gap: 10px;

    .ForgotPassword{
        .checkbox{
            display: flex;
            margin-top: -8px;
            

            p{
                margin-left: 5px;
                color: #ffffff;
                font-size: 14px;
                margin-top: 0;
                line-height: 19px;
                font-weight: normal;
                color: #FFFFFF;

                strong{
                    cursor: pointer;
                }
            }
            input{
                width: 50px;
                color: transparent;
            }
        }
        .perguntar{
           p{
            color: #ffffff;
            cursor: pointer;
           }
        }
    }
`

export const ImageRight = styled.div`

    @media(max-width:900px){
                display: none;
            }
`