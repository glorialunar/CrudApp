import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {v4 as uuid} from 'uuid';
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

export default function CrudApp ()  {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = uuid();
        setDb([
            ...db,
            data
        ])
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
    };

    const deleteData = (id) => {
        Swal.fire({
            title: 'Quieres eliminar el registro con id: ' + id + '?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('¡Eliminado!', '', 'success');
                let newData = db.filter((el) => el.id !== id);
                setDb(newData);
            } else if (result.isDenied) {
                Swal.fire('Los cambios no fueron guardados', '', 'info')
            }
        })
    };

    return (
        <div>
            <CrudForm 
                createData={createData} 
                updateData={updateData} 
                dataToEdit={dataToEdit} 
                setDataToEdit={setDataToEdit}
            />
            <CrudTable 
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
            />
        </div>
    )
};

