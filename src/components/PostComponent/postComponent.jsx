import React from 'react'
import Comments from './comments'
import Title from './../title'

const PostComponent = props => {

    return (
    <table className="ui fixed table">
        <thead>
            <tr>
                {props.state.titlePosts.map(p => <Title title={p} />)}
            </tr>
        </thead>
        <tbody >
            {props.state.comments.map(p => <Comments
                userId={p.userId}
                id={p.id}
                title={p.title}
                body={p.body}
            />)}
        </tbody>
    </table>)

}
export default PostComponent;