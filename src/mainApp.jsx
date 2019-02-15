import React from 'react';
import Users from './components/users';
import Comments from './components/comments';


const MainApp = (props) => {

    return (<table className="ui fixed table">
        <thead>
            <tr>
                <th>{props.state.title[0]}</th>
            </tr>
        </thead>
        <tbody>
            {props.state.users.map(u => <Users users={u.username} />)}
        </tbody>
        <thead>
            <tr>
                <th>{props.state.title[1]}</th>
            </tr>
        </thead>
        <tbody>
            {props.state.comments.map(d => <Comments comments={d.body} />)}
        </tbody>
    </table>
    )
}


export default MainApp;
