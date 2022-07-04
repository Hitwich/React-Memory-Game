import styled from "styled-components";


export const flipCardInner = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  border-radius: 15px;
  transform-style: preserve-3d;

  @media (max-width: 400px) {
    width: 100%;
  height: 100%;
}

 
  
`
export const flipCardBack = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  color: black;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${props => props.theme.colors.card};
  font-size: 3rem;
  @media (max-width: 400px) {
      font-size: 2.5rem;


}

`
export const flipCardFront = styled.div`
position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: ${props => props.theme.colors.insideCard};
  color: white;
  transform: rotateY(180deg);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 5rem;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 3.5rem;


}

  }

`
export const flipCard = styled.div`
  width: 20vw;
  height: 20vh;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  border-radius: 15px;
  @media (max-width: 400px) {
    height: 15vh;
}

  
`