import React from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";


const Boton = styled.input`
margin-top:20px;
margin-left:60px;
font-weight:bold;
font-size:20px;
padding:10px;
background-color: #66a2fe;
border:none;
width:100%;
border-radius:10px;
color:#FFF;
transition: background-color .3s ease;

&:hover{
    background-color: #326AC0;
    cursor:pointer;
}
`

const Formulario = ()=>{

    const MONEDAS = [
        {codigo: 'USD', nombre : 'Dolar de Estados Unidos'},
        {codigo: 'MXD', nombre : 'Peso Mexicano'},
        {codigo: 'EUR', nombre : 'Euro'},
        {codigo: 'GBP', nombre : 'Libra Esterlina'}
    ]

    const [moneda,Seleccionar,setmoneda]= useMoneda('Elige una moneda','',MONEDAS);

    return(

        <form>

            <Seleccionar/>

            <Boton type='submit' value='Calcular'/>
        </form>
    )
}

export default Formulario;