import * as styled from './styles'
export default function Toogle({position}){

    const handleClick = (e) => {
    }
    return(
        <styled.container onClick={handleClick}>
            <styled.ball position={position}></styled.ball>
        </styled.container>
    )
}