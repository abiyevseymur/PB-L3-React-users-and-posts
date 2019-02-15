import React from 'react';
import Users from './components/users';
import Comments from './components/comments';


const MainApp = (props) => {

    return (<table className="ui fixed table">
        <thead>
            <tr>
                <th>{props.titleOne}</th>
            </tr>
        </thead>
        <tbody>
            {props.state.users.map(u => <Users users={u.username} />)}
        </tbody>
        <thead>
            <tr>
                <th>{props.titleTwo}</th>
            </tr>
        </thead>
        <tbody>
            {props.state.comments.map(d => <Comments comments={d.body} />)}
        </tbody>
    </table>
    )
}


export default MainApp;
