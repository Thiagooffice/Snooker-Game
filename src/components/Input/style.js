import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    flex-direction: column;

     label{
        margin-top: 0px;
        color: #ffffff;
        font-weight: 500;
        font-size: 18px;
        font-family: 'Outfit', sans-serif;
        line-height: 23px;
    }
    input{
        height: 30px;
        background: transparent;
        margin-bottom: 8px;
        margin-top: 0px;
        outline: none;
        border: none;
        border-bottom: 3px solid #ffffff;
        color: #ffffff;
        padding-left: 5px;
        font-size: 18px;
    }
    span{
        color: #FF0000;
        padding-bottom: 3px;
       font-weight: 400;
    }
    
`