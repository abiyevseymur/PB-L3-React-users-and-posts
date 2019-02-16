import React from 'react';

const Users = (props) => {
    return <>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.city}</td>
            <td>{props.street}</td>
            <td>{props.phone}</td>
            <td>{props.website}</td>
            <td>{props.company}</td>
        </tr>
    </>
}
export default Users;