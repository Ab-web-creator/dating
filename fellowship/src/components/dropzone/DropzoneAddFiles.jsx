import React from 'react'

const DropzoneAddFiles = ({ fileInfoList, handleRemoveFile, handleFileClick, handleClearFiles, handleConfirmUpload }) => {

  const formatSize = (size) => {
    if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + ' KB';
    } else {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    }
  };

  return (
    <div className="added_files_container">
      <div className='added_files_subcontainer'>
        {fileInfoList.map((fileInfo, index) => (
          <div key={index} className="added_files" title='newly added file'>

            <p className="">
              Added file: <span className="green">{fileInfo.name}</span>
            </p>
            <p className="">
              File size: <span className="green">{formatSize(fileInfo.size)}</span>
            </p>
            <button title="remove the file" onClick={() => handleRemoveFile(index)}>
              <code>&times;</code>
            </button>
          </div>
        ))}

        <label className='addMoreLabel' htmlFor="moreFileUpload" >
          <button className='add_more_btn' >
            +
          </button>
          <input type="file" id='moreFileUpload'
            title='want to add more?'
            name="uploadedFile"
            onChange={handleFileClick} multiple />
        </label>
      </div>

      <div className="cancel_confirm_btns">
        <button className="cancel_btn" onClick={handleClearFiles} title='cancel uploading'>
          Cancel
        </button>
        <button className="confirm_btn" onClick={handleConfirmUpload} title='send to the server'>
          Confirm
        </button>
      </div>
    </div>
  )
}

export default DropzoneAddFiles