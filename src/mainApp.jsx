import React from 'react';
import UserComponent from './components/users';
import PostComponent from './components/posts';

const MainApp = (props) => {

    return (<>
        <UserComponent state = {props.state}/>
        <PostComponent state = {props.state}/>
    </>
    )
}


export default MainApp;
