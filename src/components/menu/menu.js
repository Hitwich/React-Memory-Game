import * as styled from './styles'
import {MdReplayCircleFilled} from 'react-icons/md'
export default function Menu({open,setOpen,reset}){
    const restart = () => {
        setOpen(false)
        reset()
    }
    return(
        <styled.container open={open}>
            <styled.Menu>
                <h3>Fim de jogo</h3>
                <p>Deseja jogar novamente?</p>
                <MdReplayCircleFilled onClick={restart}/>
            </styled.Menu>
            </styled.container>
    )
}