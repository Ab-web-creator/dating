import React from 'react'
import upload from '../../images/uploadfile.png';

const DropzoneContent = ({ h1, handleFileClick }) => {
  return (
    <div className="dropzone-content-container">
      <img src={upload} alt="" style={{ opacity: '0.2' }} />
      <div>
        <p className="maintitle">{h1}</p>
        <p className="secondtitle" style={{ textAlign: 'center' }}>or drag your them here</p>
      </div>

      <label htmlFor="file-upload">
        <button>Upload files</button>
        <input type="file" name="uploadedFile" onChange={handleFileClick} multiple title='uploading files?' />
      </label>
    </div>
  )
}

export default DropzoneContent