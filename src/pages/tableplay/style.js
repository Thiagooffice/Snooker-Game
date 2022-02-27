import styled from 'styled-components'

export const BackgroundImage = styled.div`
    background-image: url("/images/fundoVinho.png");
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
`
export const BlackTable = styled.div`
    background-image: url("/images/fundoPreto.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 64vw;
    height: 34vw;
    position: absolute;
    margin-top: 18vh;
    margin-left: 18vw;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GreenTable = styled.div`
    background-image: url("/images/fundoVerde.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 60vw;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const WhiteLine = styled.div`
    background-image: url("/images/whiteLine.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 55vw;
    height: 39vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const WhiteLineInside = styled.div`
    background-image: url("/images/whiteLineInside.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 52vw;
    height: 35vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerCards = styled.div`
    width: 22vw;
    height: 10vh;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
`
