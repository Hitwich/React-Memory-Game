import * as styled from './styles'

export function Card({ Img,id,listaId,setListaId,imglista,setImgLista,status,setStatus,correct,setCorrect,setCorrectId,correctId,setOpenMenu }){
        const virar = () => {
           console.log(correct)
            if (status === false || correct.includes(Img) || correctId.includes(id) || correct.length === 8) {
                return
            }
            console.log('fas')

            var div = document.getElementById(id)


            if (!listaId.includes(id) && listaId.length < 2 && imglista.length < 2 ) {
                let lista = listaId
                lista.push(id)
                setListaId(lista)
                div.style.transform = 'rotateY(180deg)'
                let lista2 = imglista
                lista2.push(Img)
                setImgLista(lista2)
                if (imglista.length === 2 ) {
                    if (imglista[0] === imglista[1]) {
                        let lista3 = correct
                        listaId.forEach((idd) => {
                            let lista4 = []
                            lista4.push(idd)
                            setCorrectId(lista4)
                        })
                        lista3.push(Img)
                        setCorrect(lista3)
                        setImgLista([])
                        setListaId([])
                        if (correct.length === 8) {
                            setOpenMenu(true)
                            console.log('gg')
                        }
                    }else{
                        setStatus(false)
                        setTimeout(() => {
                            listaId.forEach((item) => {
                                let element = document.getElementById(item)
                                element.style.transform = 'rotateY(0deg)'

                            })
                            setImgLista([])
                            setListaId([])
                            setStatus(true)
                        },1000)
                    }
                }

            }








        }
    
           
    return(
        <styled.flipCard onClick={virar}>

            <styled.flipCardInner id={id}>
                <styled.flipCardFront>
                   <Img/>
                </styled.flipCardFront>
                <styled.flipCardBack>
                    ?
                </styled.flipCardBack>



            </styled.flipCardInner>
        
        </styled.flipCard>
    )
}