import * as styled from './styles'
import Shuffle from '../../functions/Shuffle'
import React, { useEffect } from 'react'
import { Card } from '../../components/Card/card'
import {DiCss3Full,DiHtml5,DiJsBadge,DiReact,DiVisualstudio,DiGithubBadge,DiCode,DiBootstrap} from 'react-icons/di'
import { useSelector } from 'react-redux'
import Menu from '../../components/menu/menu'
import { ThemeProvider } from 'styled-components';
import ChangeTheme from '../../functions/changeTheme'

import Timer from '../../components/timer/timer'
export default function App(){
  var time = useSelector((state) => state.time.value)
  var array = [DiCss3Full,DiCss3Full,DiHtml5,DiHtml5,DiJsBadge,DiJsBadge,DiReact,DiReact,DiVisualstudio,DiVisualstudio,DiGithubBadge,DiGithubBadge,DiCode,DiCode,DiBootstrap,DiBootstrap]
  var lista = Shuffle(array)
  const reset =  () => {
    for (let index = 0; index < 16; index++) {
      let div = document.getElementById(index)
      div.style.transform = 'rotate(360deg)'
      
    }
    setCardList(lista)
    setListaId([])
    setImgLista([])
    setStatus(true)
    setCorrect([])
    setCorrectId([])
    setOpenMenu(false)
    setSeconds(time)



  }
  var [cardList,setCardList] = React.useState(lista)
  var [listaId,setListaId] = React.useState([])
  var [imglista,setImgLista] = React.useState([])
  var [status,setStatus] = React.useState(true)
  var [correct,setCorrect] = React.useState([])
  var [correctId,setCorrectId] = React.useState([])
  var [openMenu,setOpenMenu] = React.useState(false)
  var [seconds,setSeconds] = React.useState(useSelector((state) => state.time.value))

  var theme = ChangeTheme()
  useEffect(() => {
    if (seconds > 0 && openMenu === false) {
      
    
    const timer = setInterval(function() {
            setSeconds(seconds - 1);

        
    }, 1000)

    return () => { 
       clearInterval(timer)
    }
  }else{
    setOpenMenu(true)
  }

   }, [seconds,openMenu]);

   
   
   
  return(
    <ThemeProvider theme={theme}>
    <styled.container>
        <Timer seconds={seconds} setSeconds={setSeconds}></Timer>
        <styled.cardContainer>
             {cardList.map((element,index) => (
              <Card id={index++} listaId={listaId} setListaId={setListaId} imglista={imglista} setImgLista={setImgLista}
              status={status} setStatus={setStatus} correct={correct} setCorrect={setCorrect} correctId={correctId} setCorrectId={setCorrectId}
              setOpenMenu={setOpenMenu}
              Img={element}></Card>
             ))}
          <Menu open={openMenu} setOpen={setOpenMenu} reset={reset}/>
        </styled.cardContainer>
    </styled.container>
    </ThemeProvider>
  )
}