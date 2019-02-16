import React from 'react'
import Users from './users'
import Title from './../title'

const UserComponent = props => {
    return(
        <table className = "ui fixed table" >
        <thead>
            <tr>
                {props.state.titleUsers.map(u => <Title title={u} />)}
            </tr>
        </thead>
        <tbody>
            {props.state.users.map(u => <Users
                id={u.id}
                username={u.username}
                name={u.name}
                email={u.email}
                phone={u.phone}
                website={u.website}
                city={u.address.city}
                street={u.address.street}
                company={u.company.name}
            />)}
        </tbody>
    </table >)
}

export default UserComponent;