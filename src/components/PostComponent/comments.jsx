import React from 'react';

const Comments = (props) => <tr>
    <td>{props.userId}</td>
    <td>{props.id}</td>
    <td>{props.title}</td>
    <td>{props.body}</td>
</tr>

export default Comments;