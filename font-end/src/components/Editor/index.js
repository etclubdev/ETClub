import React from 'react';
import Editor from './EditorWithUseQuill';


const EditorComponent = ({ setValue }) => {
    return (
        <Editor setValue={setValue} placeholder={'Write something...'} />
    );
};

export default EditorComponent;