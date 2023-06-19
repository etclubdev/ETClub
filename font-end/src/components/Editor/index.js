import React from 'react';
import Editor from './EditorWithUseQuill';


const EditorComponent = ({ setValue, initialValue }) => {
    return (
        <Editor initialValue={initialValue} setValue={setValue} placeholder={'Write something...'} />
    );
};

export default EditorComponent;