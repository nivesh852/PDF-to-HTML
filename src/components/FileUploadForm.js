import { useDropzone } from 'react-dropzone';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../services/firebase";

const generateRandomFileName = (file) => {
  const timestamp = Date.now();
  const randomChars = Math.random().toString(36).substring(2, 8);
  const extension = file.name.split(".").pop();
  const fileName = `${timestamp}_${randomChars}.${extension}`;

  // Create a new file object with the renamed file
  const renamedFile = new File([file], fileName, {
    type: file.type,
  });

  return renamedFile;
};

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    let uploadedFileName = generateRandomFileName(file);
    const url = await uploadFile(uploadedFileName);
    setDownloadUrl(url);
    setLoading(false);
    navigate(`/pdf/${uploadedFileName.name}`);
  }

  const navigate = useNavigate();

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center", border: "2px dashed #ccc", padding: "20px", backgroundColor: isDragActive ? "#eee" : "white" }} {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop a PDF file here, or click to select a file</p>
      {file && <p>Selected file: {file.name}</p>}
      <button type="submit" disabled={!file || loading} style={{ marginTop: "10px" }}>
        Upload
      </button>
      {downloadUrl && <p style={{ marginTop: "10px" }}>Download URL: {downloadUrl}</p>}
    </form>
  );
}

export default FileUploadForm;
