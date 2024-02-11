import logo from "./logo.svg";
import "./App.css";
import FileUploadForm from "./components/FileUploadForm";
import PdfViewerById from "./components/PdfViewerById";
import Error from "./components/NotFoundPage";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <h1>PDF</h1>
          <br />
          <br />
          <div className="App-body">
            <Routes>
              <Route path="/" element={<FileUploadForm/>} />
            <Route path="/pdf/:id" element={<PdfViewerById />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
