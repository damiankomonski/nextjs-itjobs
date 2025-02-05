import React from 'react';
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props: any) => {
  if (props.isDragAccept) {
      return '#00e676';
  }
  if (props.isDragReject) {
      return '#ff1744';
  }
  if (props.isFocused) {
      return '#2196f3';
  }
  return '#c7c7c7';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  border-width: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

export default function Dropzone() {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  });

  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bajtów
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bajtów
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <section>
      <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
        <input {...getInputProps()} />
          <p className="mb-0">Przeciągnij i upuść plik lub kliknij.</p>
          <em className="text-sm">(Tylko .jpg, .png oraz .pdf jest akceptowane)</em>
      </Container>
      <aside>
        <h5>Accepted files</h5>
        <ul>{acceptedFileItems}</ul>
        <h5>Rejected files</h5>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}