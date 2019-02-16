import React from 'react';
import UserComponent from './components/UserComponent/userComponent';
import PostComponent from './components/PostComponent/postComponent';

const MainApp = (props) => {

    return (<>
        <UserComponent state = {props.state}/>
        <PostComponent state = {props.state}/>
    </>
    )
}


export default MainApp;
