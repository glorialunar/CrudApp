import { useState } from "react";

const inicialForm = {
    id: null,
    name: "",
    constellation: ""
}

export default function CrudForm() {
    const [form, setForm] = useState(inicialForm);

    const handleChange = (e) => {

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
                    type="text" 
                    name="finalScore" 
                    placeholder="Nota Final"
                    onChange={handleChange}
                    value={form.constellation}
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

