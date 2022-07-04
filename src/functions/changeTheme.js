import { useSelector} from 'react-redux'
import { Dark } from '../styles/darkTheme'
import { Theme } from '../styles/theme'
export default function ChangeTheme(){

    const count = useSelector((state) => state.counter.value)
    
    if (count) {
        return Theme
    }
    return Dark


}