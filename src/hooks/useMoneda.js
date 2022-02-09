import react ,{Fragment ,useState} from "react";
import style from '@emotion/styled';

const Label = style.label`

font-family:'Bebas Neue', cursive;
color: #FFF;
text-transform: uppercase;
font-weight:bold;
font-size:2.4rem;
margin-top:2rem;
margin-left:60px;
display:block;

`;

const Select = style.select`

    width:50%;
    display:block;
    padding: 0.5rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border:none;
    font-size : 0.8rem;
    margin-left:60px;
    cursor:pointer;
`

const useMoneda = (lebel,inicial,MONEDAS)=>{

    const[state,setstate] = useState(inicial)

    const Seleccionar = ()=>(
       
        <Fragment >

            <Label >{lebel}</Label>
            <Select 
                onChange={ e => setstate(e.target.value)}
                value={state}
            >
                <option vaue=''> Seleccionar monedas </option>
                {
                    MONEDAS.map (m=>(
                        <option key={m.codigo} vaue={m.codigo}>{m.nombre}</option>
                    ))
                }
             </Select>
                
        </Fragment>
       
        
    )

        return [state,Seleccionar,setstate];
}

export default useMoneda;