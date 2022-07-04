import styled from "styled-components";


export const container = styled.div`
    width: 40px;
    height: 15px;
    border-radius: 50px;
    position: relative;
    background-color: ${props => props.theme.colors.primary};
`
export const ball = styled.div`
position: absolute;
background-color: ${props => props.theme.colors.secundary};
width: 15px;
height: 15px;
border-radius: 50%;
left: ${({position}) => position ? '0px' : '25px'};
top: calc(50% - 7.5px);

`