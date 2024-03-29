import React from "react";
import styled from "@emotion/styled";
import imagen from './cryptomonedas.png'
import Formulario from "./componentes/Formulario";


const Contenedor = styled.div`
max-width:900px;
margin:0 auto;
@media (min-width:992px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2 rem;
}
`;

const Imagen = styled.img`
max-width: 100%;
margin-top: 5rem;
`;

const Heading = styled.h1`
font-family:'Bebas Neue', cursive;
color: #FFF;
text-align: left;
font-weight:700px;
font-size:50px;
margin-buttom:50px;
margin-top:80px;
margin-left:60px;

&::after{
  content:'';
  width:100px;
  height:6px;
  background-color: #66A2FE;
  display:block;
}
`

function App() {
  return (
    <Contenedor>
      <div>
    <Imagen 
        src={imagen}
        alt='imagen cripto'
        />
      </div>
    
      <div>
        <Heading>COTIZA CRIPTOMONEDAS AL INSTANTE</Heading>
        <Formulario/>
      </div>

    </Contenedor>
  );
}

export default App;
