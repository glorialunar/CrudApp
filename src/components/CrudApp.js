import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import {v4 as uuid} from 'uuid';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import Loader from './Loader';
import Message from './Message';

export default function CrudApp ()  {
    const [db, setDb] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    let api = helpHttp();
    let url = "http://localhost:5000/ctd";

    useEffect(() => {
        setLoading(true);
        api.get(url).then((res) =>{
            if(!res.err){
                setDb(res);
                setError(null);
            }else{
                setDb(null);
                setError(res.err)
            }
            setLoading(false);
        })
    }, []);


    const createData = (data) => {
        if(data.name !== undefined || data.finalCore !== undefined){
            data.id = uuid();
            setDb([
                ...db,
                data
            ])
        }
        console.log(data);
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

            {loading && <Loader/>}
            {error && <Message/>}
            
            {db && <CrudTable 
                        data={db}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                    />
            }    
        </div>
    )
};

