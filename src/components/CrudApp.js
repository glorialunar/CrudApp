import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"

const initialDb = [
    {
        id: 1,
        name: "Introducción a la informática",
        finalScore: 9,
    },
    {
        id: 2,
        name: "Frontend I",
        finalScore: 9.6,
    },
    {
        id: 3,
        name: "Metodologías de trabajo",
        finalScore: 9.55,
    },
    {
        id: 4,
        name: "Base de datos",
        finalScore: 7.5,
    },
    {
        id: 5,
        name: "Programación imperativa",
        finalScore: 10,
    },
    {
        id: 6,
        name: "Soft Skill: Learning agility",
        finalScore: undefined,
    },
    {
        id: 7,
        name: "Testing I",
        finalScore: 10,
    },
    {
        id: 8,
        name: "Programación orientada a objetos",
        finalScore: 9.5,
    },
    {
        id: 9,
        name: "Programación imperativa",
        finalScore: 10,
    },
    {
        id: 10,
        name: "Taller: Design Thinking",
        finalScore: 8,
    },
    {
        id: 11,
        name: "Infraestructura I",
        finalScore: 10,
    },
    {
        id: 12,
        name: "Soft Skill: Comunicación efectiva",
        finalScore: undefined,
    },
    {
        id: 13,
        name: "Frontend II",
        finalScore: 10,
    },
    {
        id: 14,
        name: "Diseño UX & UI",
        finalScore: 8.42,
    },
    {
        id: 15,
        name: "Backend I",
        finalScore: 10,
    },
]

export default function CrudApp ()  {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        console.log(data);
        data.id = uuid();
        // setDb([
        //     ...db,
        //     data
        // ])
    };
    const updateData = (data) => {};
    const deleteData = (id) => {};

    return (
        <div>
            <h2>CRUD App</h2>
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

