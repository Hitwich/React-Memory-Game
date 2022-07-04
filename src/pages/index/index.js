import * as styled from './styles'
import { ThemeProvider } from 'styled-components';
import DificultyBox from '../../components/dificultyBox/dificultyBox';
import { FaPlay } from "react-icons/fa";
import { RiSettings4Fill } from "react-icons/ri";
import React from 'react';
import Settings from '../../components/settings/settings';
import ChangeTheme from '../../functions/changeTheme';
export default function Index(){
   
    const theme = ChangeTheme()
    var [menu,setMenu] = React.useState(false)
    var [open,setOpen] = React.useState(false)
    return(
        <ThemeProvider theme={theme}>

        <styled.container>
            <styled.box onClick={() => {setOpen(!open)}} >
            <FaPlay/>
            </styled.box>
            <styled.box onClick={() => {setMenu(!menu)}}>
                <RiSettings4Fill/>
            </styled.box>
            <Settings setMenu={setMenu} display={menu}></Settings>

        </styled.container>
        <DificultyBox display={open} setOpen={setOpen}/>

        </ThemeProvider>
    )
}