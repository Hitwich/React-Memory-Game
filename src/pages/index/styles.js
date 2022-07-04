import styled from "styled-components";

export const container = styled.div`
    background-color: ${props => props.theme.colors.background};
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

`
export const box = styled.div`
    cursor: pointer;
    background-color:${props => props.theme.colors.primary};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    >svg {
        font-size: 2.3rem;
        
        color: ${props => props.theme.colors.secundary};
        
    }
`