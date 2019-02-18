import React from 'react'

const Posts = props => {

    return (
    <table className="ui fixed table">
        <thead>
            <tr>
                {props.state.titlePosts.map(title =><th>{title}</th>)}
            </tr>
        </thead>
        <tbody >
            {props.state.comments.map(p => <tr key={p.id}>
                <td>{p.userId}</td>
                <td>{p.title}</td>
                <td>{p.body}</td>
            </tr>)}
        </tbody>
    </table>)

}
export default Posts;