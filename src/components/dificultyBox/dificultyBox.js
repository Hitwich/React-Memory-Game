import * as styled from './styles'
import {AiOutlineClose} from 'react-icons/ai'
import { easy,normal,hard } from '../../store/setTimer'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
export default function DificultyBox ({display,setOpen}){
    const dispatch = useDispatch()
    const history = useNavigate()
    const handleClickEasy = () => {
        dispatch(easy())
        history("/memory-card");
    }
    const handleClickNormal = () => {
        dispatch(normal())
        history("/memory-card");

    }
    const handleClickHard = () => {
        dispatch(hard())
        history("/memory-card");

    }
    return(
        <styled.container display={display}>
            <styled.box>
                <h3>Dificulty</h3>

                <styled.select>

                <styled.mode onClick={handleClickEasy}>
                    Easy
                </styled.mode>
                <styled.mode onClick={handleClickNormal}>
                    Normal
                </styled.mode>
                <styled.mode onClick={handleClickHard}>
                    Hard
                </styled.mode>
                </styled.select>
                <styled.close onClick={() => {setOpen(false)}}>
                        <AiOutlineClose />
                </styled.close>
            </styled.box>
        </styled.container>
    )
}