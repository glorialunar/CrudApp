import { useState } from "react";
import Swal from "sweetalert2";

const inicialForm = {
    id: null,
    name: "",
    finalScore: ""
}

export default function CrudForm({
    createData, 
    updateData, 
    dataToEdit, 
    setDataToEdit
}) {
    const [form, setForm] = useState(inicialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.finalScore){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Datos incompletos!',
            })
        } 

        if(form.id === null){
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    }

    const handleReset = (e) => {
        setForm(inicialForm);
        setDataToEdit(null);
    }

    return ( 
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Materia"
                    onChange={handleChange}
                    value={form.name}
                />
                <input 
                    type="number" 
                    name="finalScore" 
                    placeholder="Nota Final"
                    onChange={handleChange}
                    value={form.finalScore}
                />
                <input 
                    type="submit" 
                    value="Enviar"
                />
                <input 
                    type="reset" 
                    onClick={handleReset}
                    value="Limpiar"
                />
            </form>
        </div>
    );
}

