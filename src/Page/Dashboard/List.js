import React from 'react'
import edit from '../../image/Vector.png'
import delet from '../../image/2.png'
function List({ employees, handleEdit, handleDelete }) {

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Subject</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{employee.title}</td>
                                <td>{employee.description}</td>
                                <td>{employee.subject}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        <img src={edit} alt=" "/>
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        <img src={delet} alt=""/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>Not yet scheduled</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List