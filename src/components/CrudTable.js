import CrudTableRow from "./CrudTableRow";

export default function CrudTable({ data, setDataToEdit, deleteData }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Nota Final</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    ) : (
                        data.map((el) => (
                        <CrudTableRow
                            key={el.id}
                            el={el}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
