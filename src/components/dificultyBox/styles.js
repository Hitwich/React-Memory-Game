import styled from "styled-components";

export const container = styled.div`
 position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(41, 138, 138, 0.5); 
    display: ${({display}) => display ? 'flex' : 'none'};
    justify-content: center;
   align-items:center;
`

export const box = styled.div`
position: relative;
    background-color: ${props => props.theme.colors.background};
    padding: 2% 6% 2% 6%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    >h3{
        color: ${props => props.theme.colors.secundary};
        font-size: 1.7rem;
    }
    @media (max-width:600px ) {
        padding: 5% 6% 3% 5%;
        width:80vw;

    }

`

export const select = styled.div`
margin-top: 2vh;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 3vh;
    width: 100%;
   
    


`

export const mode = styled.div`
    background-color: ${props => props.theme.colors.primary};
    font-weight: bold;
    width:20vw;
    padding: 1% 0 1% 0;
    border-radius: 5px;
    cursor: pointer;
    transition:0.2s;
    :hover{
        background-color: ${props => props.theme.colors.secundary};

        color: ${props => props.theme.colors.primary};

    }
    @media (max-width:600px ) {
        width:100%;
    }

    

`

export const close = styled.div`
cursor: pointer;
    top : -70px;
    right: 0px;
    position: absolute;
    >svg {
        font-size: 3rem;
        color: ${props => props.theme.colors.primary};
    }
`
