import React from 'react'

const PostComponent = props => {

    return (
    <table className="ui fixed table">
        <thead>
            <tr>
                {props.state.titlePosts.map(p =><th>{p}</th>)}
            </tr>
        </thead>
        <tbody >
            {props.state.comments.map(p => <tr>
                <td>{p.userId}</td>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
            </tr>)}
        </tbody>
    </table>)

}
export default PostComponent;