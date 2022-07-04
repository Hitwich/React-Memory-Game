import React from 'react'
import { useEffect } from 'react';
import ConvertTImer from '../../functions/convertTime';
import * as styled from './styles'
export default function Timer({seconds,setSeconds}){
   
    return(
        <styled.container>
            {ConvertTImer(seconds)}
        </styled.container>
    )
}