import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import DropzoneSuccess from './DropzoneSuccess';
import DropzoneContent from './DropzoneContent';
import DropzoneAddFiles from './DropzoneAddFiles';

import './dropzone.css';

const Dropzone = ({ h1 }) => {

  const [filesChosen, setFilesChosen] = useState(false);
  const [fileInfoList, setFileInfoList] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleFileUpload = (fileList) => {
    const newFileInfoList = Array.from(fileList).map(file => ({ name: file.name, size: file.size }));
    setFileInfoList([...fileInfoList, ...newFileInfoList]);
    setFilesChosen(true);
  };

  const handleFileClick = (event) => {
    const fileList = event.target.files;
    if (fileList.length > 0) {
      handleFileUpload(fileList);
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFileInfoList = [...fileInfoList];
    updatedFileInfoList.splice(index, 1);
    setFileInfoList(updatedFileInfoList);
    if (updatedFileInfoList.length === 0) {
      setFilesChosen(false);
    }
  };

  const handleClearFiles = () => {
    setFileInfoList([]);
    setFilesChosen(false);
    setShowProgress(false);
    setShowSuccess(false);
  };

  const [saveAmount, setSaveAmount] = useState(0)

  const handleConfirmUpload = () => {
    setShowProgress(true);
    setSaveAmount(fileInfoList.length)
  };


  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const fileList = event.dataTransfer.files;
    handleFileUpload(fileList);
  };

  useEffect(() => {
    if (showSuccess) {
      setFileInfoList([]);
    }
  }, [showSuccess]);

  return (
    <div
      className={`dropzone ${dragging ? 'dropzone_dragged' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {filesChosen ? null : (
        <DropzoneContent h1={h1} handleFileClick={handleFileClick} />
      )}

      {filesChosen && fileInfoList.length > 0 && !showProgress && !showSuccess && (
        <DropzoneAddFiles
          handleRemoveFile={handleRemoveFile}
          fileInfoList={fileInfoList}
          handleFileClick={handleFileClick}
          handleClearFiles={handleClearFiles}
          handleConfirmUpload={handleConfirmUpload}
        />
      )}

      {showProgress && !showSuccess &&
        <ProgressBar showProgress={showProgress} setShowSuccess={setShowSuccess} />
      }

      {showSuccess && (
        <>
          <DropzoneSuccess saveAmount={saveAmount} handleClearFiles={handleClearFiles} />
        </>
      )}
    </div>
  );
};

export default Dropzone;
