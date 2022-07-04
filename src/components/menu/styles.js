import styled, { css } from "styled-components";


export const container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(41, 138, 138, 0.5); 
    display: none;
    
    ${({open}) => {
        if (!open) {
            return fechar()
        }
        return abrir()
    }}
`

export const Menu = styled.div`
width: 500px;
height: 400px;
background-color: ${props => props.theme.colors.background};
position: absolute;
top: calc(50% - 200px);
box-shadow: 0 0 5px black;
left: calc(50% - 250px);
border-radius: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => props.theme.colors.primary};
font-weight: bold;
>h3{
    font-size: 3rem;
    margin-bottom: 1vw;
}
>svg {
    margin-top: 3vw;
    font-size: 4.5rem;
    cursor: pointer; 
}
@media (max-width: 450px) {
    width: 80vw;
    height: 180px;
    left: calc(50% - 40vw);
    top: calc(50% - 90px);


      font-size: 0.7rem;
      >h3{
        font-size: 1.5rem;

      }
      >svg {
        margin-top: 50px;
        font-size: 3.5rem;
      }


}

`
export const fechar =  () => css`
    display: none;
`

export const abrir =  () => css`
    display: flex;
`