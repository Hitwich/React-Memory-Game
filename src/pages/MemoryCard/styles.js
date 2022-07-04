import styled from "styled-components";


export const container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items:center;
    gap:2vh;
    padding-top:1vh;

`
export const cardContainer = styled.div`
width: 90vw;
max-height: 90vh;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(22vw,4fr));
justify-items: center;
row-gap: 10px;
column-gap: 0px;

@media (max-width: 400px) {
    width: 100vw;

    padding-left: 2vw;
    width:100vw;
    grid-template-columns: repeat(auto-fill,minmax(20vw,4fr));
    padding-right: 7px;
    gap:0;
    row-gap: 15px;



}

    
`
