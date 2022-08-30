function CrudTableRow({el}) {
    return ( 
        <tr>
            <td>{el.name}</td>
            <td>{el.finalScore}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>

        </tr>
    );
}

export default CrudTableRow;