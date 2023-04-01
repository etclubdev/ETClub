import React, { useState } from 'react';
const FilesUploadComponent = () => {
    const [image, setImage] = useState({});
    
    const fileOnChange = (event) =>{
        setImage(event.target.files[0]);
    };
    const sendImage = (event) => {
        let formData = new FormData();

        formData.append("img", image)

        fetch("http://localhost:5000/uploadFile",{
            method: "post",
            body: formData,
        }).then((res) => res.text()).then((resBody) =>{
            console.log(resBody)
        });
    };
    return (
            <div className="container">
                <input type="file" onChange={fileOnChange} />
                <button onClick={sendImage}>Upload</button>
            </div>
       
        
    )
}
export default FilesUploadComponent;
