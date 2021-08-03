import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const EditButton = props => {
    const { authorId,initialAuthorName } = props;

    const editAuthor = e => {
       navigate(`/edit/${authorId}`);
       <EditButton authorId={authorId} initialAuthorName={initialAuthorName}/>
    }

    return (
        <button onClick={editAuthor}>
            Edit
        </button>
    )
}

export default EditButton;