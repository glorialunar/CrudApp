function CrudTableRow({
    el, 
    setDataToEdit,
    deleteData,
}) {
    let {id, name, finalScore} = el;
    return ( 
        <tr>
            <td>{name}</td>
            <td>{finalScore}</td>
            <td>
                <button
                    onClick={() => setDataToEdit(el)}
                >
                    Editar
                </button>
                <button
                    onClick={() => deleteData(id)}
                >
                    Eliminar
                </button>
            </td>

        </tr>
    );
}

export default CrudTableRow;