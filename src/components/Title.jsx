import React from 'react'
import { DEFAULT_ENCODING } from 'crypto';


const Title = props => {
    return (
        <thead>
            <tr>
                <th>{props.title}</th>
            </tr>
        </thead>
    )
}

export default Title;