
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
            <td className='container-buttons'>
                <button
                    onClick={() => setDataToEdit(el)}
                    className="button-edit"
                >
                    Editar
                </button>
                <button
                    onClick={() => deleteData(id)}
                    className="button-delete"
                >
                    Eliminar
                </button>
            </td>

        </tr>
    );
}

export default CrudTableRow;