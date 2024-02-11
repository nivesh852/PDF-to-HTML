import { storage } from "./firebase";
import { ref } from "firebase/storage";

// Function to upload PDF file
const uploadPdf = (file) => {
  return new Promise((resolve, reject) => {
    // Create a storage reference for the PDF file
    const fileName = `${Date.now()}_${file.name}`;
    const pdfRef = ref(storage, `pdfs/${fileName}`);

    // Upload PDF file to Firebase storage
    pdfRef
      .put(file)
      .then((snapshot) => {
        // Get download URL of PDF file
        pdfRef.getDownloadURL().then((url) => {
          resolve(url);
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { uploadPdf };
