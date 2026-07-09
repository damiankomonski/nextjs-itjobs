import React from 'react';
import {useDropzone} from 'react-dropzone';

export default function Dropzone() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path} className="">Dodano plik: {file.path}</li>
  ));

  return (
    <section>
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Przeciągnij i upuść pliki tutaj, lub kliknij aby wybrać pliki</p>
      </div>
      <aside className="mt-2">
        <ul>{files}</ul>
      </aside>
    </section>
  );
}