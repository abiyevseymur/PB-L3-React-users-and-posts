import React from 'react'

const Users = props => {
    return (
        <table className="ui fixed table" >
            <thead>
                <tr>
                    {props.state.titleUsers.map(title =><th>{title}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.state.users.map(u => <tr key = {u.id}>
                    <td>{u.username}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.address.city}</td>
                    <td>{u.address.street}</td>
                    <td>{u.phone}</td>
                    <td>{u.website}</td>
                    <td>{u.company.name}</td>
                </tr>)}
            </tbody>
        </table >)
}

export default Users;