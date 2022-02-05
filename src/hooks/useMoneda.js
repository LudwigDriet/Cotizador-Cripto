import react ,{Fragment ,useState} from "react";

const useMoneda = (lebel,inicial,MONEDAS)=>{

    const[state,setstate] = useState(inicial)

    const Seleccionar = ()=>(
       
        <Fragment >

            <label style={{marginLeft:'60px'}} >{lebel}</label>
            <select>
                <option vaue=''> Seleccionar</option>
                {
                    MONEDAS.map (m=>(
                        <option key={m.codigo} vaue={m.codigo}>{m.nombre}</option>
                    ))
                }
             </select>

        </Fragment>
    )

        return [state,Seleccionar,setstate];
}

export default useMoneda;