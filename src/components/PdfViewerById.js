import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storage } from '../services/firebase';
import { Document, Page, pdfjs } from 'react-pdf';

function PdfViewerById() {
  const { id } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    const fetchPdfUrl = async (fileName) => {
      // Create a reference to the PDF file in Firebase Storage
      const pdfRef = storage.ref(`pdfs/${fileName}`);
    
      // Get the download URL for the PDF file
      try {
          const downloadUrl = await pdfRef.getDownloadURL();
        //   const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
        //   const downloadUrl2 = `${corsAnywhereUrl}${downloadUrl}`;

        setPdfData(downloadUrl);
      } catch (error) {
        console.log(`Error fetching PDF URL: ${error.message}`);
      }
    };
      
    // Call the fetchPdfUrl function with the filename
    fetchPdfUrl(id);
  }, [id]);

  // Configure PDF.js worker
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {pdfData ? (
        <Document
          file={pdfData}
          onLoadSuccess={onDocumentLoadSuccess}
          options={{ workerSrc: `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js` }}
        >
          {Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={window.innerWidth}
              />
            ),
          )}
        </Document>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}

export default PdfViewerById;
