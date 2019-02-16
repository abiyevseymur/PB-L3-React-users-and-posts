import React from 'react';
import Users from './components/users';
import Comments from './components/comments';
import Title from './components/Title'

const MainApp = (props) => {

    return (<table className="ui fixed table">
        <Title title ={props.state.title[0]}/>
        <tbody>
            {props.state.users.map(u => <Users users={u.username} />)}
        </tbody>
        <Title title ={props.state.title[1]}/>
        <tbody >
            {props.state.comments.map(d => <Comments comments={d.body} />)}
        </tbody>
    </table>
    )
}


export default MainApp;
