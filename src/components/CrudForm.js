import { useState } from "react";

const inicialForm = {
    id: null,
    name: "",
    finalScore: ""
}

export default function CrudForm() {
    const [form, setForm] = useState(inicialForm);


    const handleChange = (e) => {
        console.log(e);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {

    }
    const handleReset = (e) => {

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

