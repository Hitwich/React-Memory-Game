import * as styled from './styles'
import {AiOutlineClose} from 'react-icons/ai'
import Toogle from '../toogle/toogle'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../store/changeColor'
export default function Settings({display,setMenu}){
    const theme = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    
    return(
        <styled.container display={display} >
            <styled.settings>
                <styled.button onClick={() => {setMenu(false)}}>
                    <AiOutlineClose/>
                </styled.button>
                <h3>Settings</h3>
                <styled.option onClick={() => {dispatch(change())}}>
                    Dark Mode 
                    <Toogle position={theme}/>
                </styled.option>
            </styled.settings>
        </styled.container>
    )
}