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
    gap: 18px;



    .ForgotPassword{
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .checkbox{
            display: flex;
            justify-content: center;
            align-items: center;

            p{
                margin-left: 5px;
                color: #ffffff;
                font-size: 16px;
            }
        }
        .perguntar{
           p{
            color: #ffffff;
            cursor: pointer;
           }
        }
    }

    .buttonLogin{
        height: 60px;
        background: #1ABC9C;
        box-shadow: 0px 4px 20px rgba(26, 188, 156, 0.5);
        border-radius: 10px;
        outline: none;
        cursor: pointer;
        font-size: 20px;
        color: #FFFFFF;
        border: none;
    }

    .registerNow{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        
        
        p{
            cursor: pointer;
            margin-left: 7px;
            margin-right: 7px;
        }
        div{
           height: 0.3px;
           width: 72px;
           background-color: #ffffff;
           opacity: 0.14;
        }
    }

    .containerIcons{
        display: flex;
        justify-content: center;
        gap: 6px;
        align-items: center;
        flex-direction: row;
        .icons{
            background: #FFFFFF;
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            cursor: pointer;
        }
    }

    

`
export const ImageRight = styled.div`

    @media(max-width:900px){
                display: none;
            }
`