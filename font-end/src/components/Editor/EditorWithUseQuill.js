import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';

import './styles.css';

const Editor = ({ setValue }) => {
    const { quill, quillRef, Quill } = useQuill({
        modules: { blotFormatter: {} }
    });

    if (Quill && !quill) {
        // const BlotFormatter = require('quill-blot-formatter');
        Quill.register('modules/blotFormatter', BlotFormatter);
    }

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldContents) => {
                console.log('Text change!');
                console.log(quillRef.current.firstChild.innerHTML);
                setValue(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill, Quill]);

    return (
        <div>
            <div ref={quillRef} />
        </div>
    );
};

export default Editor;
