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

export const settings = styled.div`
    background-color: ${props => props.theme.colors.background};

    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 15px;
    padding-top: 30px;
    >h3{
        text-align: center;
        color: ${props => props.theme.colors.secundary};
        margin-bottom: 50px;

    }
    @media (max-width: 450px) {
        width: 250px;
        height: 300px;
        
    }
    
`

export const button = styled.div`
position: absolute;
cursor: pointer;
right: -50px;
top: -50px;
cursor: pointer;
>svg {
    
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
}

@media (max-width: 450px) {
        right: -10px;
        top: -50px;
       >svg {
        font-size: 2rem;
        
       }
        
    }
`

export const option = styled.div`
padding-left: 30px;
display: flex;
align-items: center;
gap: 8px;
color: ${props => props.theme.colors.secundary};
@media (max-width: 400px) {
       padding-left:5px;
       gap:15px;
        
    }
`