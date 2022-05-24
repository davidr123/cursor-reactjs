import React, { useEffect } from 'react';
import { useState } from 'react';

const initialForm={
    name:"",
    constelation:"",
    id:null
}
 const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    const [form, setForm] = useState(initialForm);

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(initialForm);
        }
    },[dataToEdit])

    const handleChage =(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!form.name || !form.constelation){
            alert('Datos incompletos');
            return;
        }

        if(form.id===null){
            createData(form);
        }else{
            updateData(form);
        }

        handleReset();
    }
    const handleReset =(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    };

  return (
    <div>
        <h3>{dataToEdit ? 'Editar' : 'Agregar' }</h3>
        <form onSubmit={handleSubmit}>
            <input  type='text' name='name' placeholder='Nombre'  onChange={handleChage}  value={form.name}/>

            <input  type='text' name='constelation' placeholder='Constelacion' onChange={handleChage} value={form.constelation}/>
            <input type='submit' value='Enviar'/>
            <input type='reset' value='Limpiar' onClick={handleReset}/>

        </form>
    </div>
  )
}

export default CrudForm;