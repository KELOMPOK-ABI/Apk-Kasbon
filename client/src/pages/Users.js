import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getUsers } from '../fetch'

function Users() {
    const [users, setUsers] = useState([]);
    const NowLoading = () => {
        return (
            <tr>
                <td>Loading users</td>
            </tr>
        )
    }
    useEffect(() => {
        getUsers((result) => {
            setUsers(result)
        })
    }, [])
    
    const deleteUserHandler = id => {
        deleteUser(id, (result) => {
            setUsers(result)
        })
    }
    return (
        <div className="app-home container text-center mt-3">
            <div>
                <h3 className="mb-3 float-start">Table Users</h3>
                <Link to="/users/create" className="btn btn-sm btn-primary float-end">+ Add Users</Link>
            </div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr className="table-head">
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.length !== 0 ?
                            users.map(user => {
                                const { id, username, email } = user
                                return (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>
                                            <Link className="btn btn-sm btn-warning me-2" to={`/users/update/${id}`}>
                                                <i className="fa-solid fa-edit me-2"></i>
                                                Update
                                            </Link>
                                            <button onClick={() => deleteUserHandler(id)} className="btn btn-sm btn-danger">
                                                <i className="fa-solid fa-trash me-2"></i>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }) :
                            <NowLoading></NowLoading>
                    }
                </tbody>
            </table>
        </div>);
}

    
export default Users;