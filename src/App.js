import React from 'react'
import { useDropzone } from 'react-dropzone'
import './App.css';

function App() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone()
  return (
    <>
      <div { ...getRootProps({ className: 'dropzone' })}>
        <ul className='imageSpace'>
          <input {...getInputProps()} className='hidden' />
          <p>Drag and Drop</p>
          <div className='imageSpot'>
            {acceptedFiles.map((acceptedFile, index) => {
              const createObjectURL = ( window.URL || window.webkitURL ).createObjectURL
              return(
                <li key={ index } className='imageList'>
                  <img src={ createObjectURL( acceptedFile )} alt='preview'/>
                </li>
              )
            })}
          </div>
        </ul>

      </div>
    </>
  );
}

export default App;
