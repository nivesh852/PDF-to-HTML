# PDF-to-Static-HTML-FireStore

This is a simple web application that allows users to upload PDF files and converts them into static HTML pages. The converted files are then stored in Firestore, a cloud-hosted NoSQL database. This project is built with React and Firebase.

## Getting Started
To run this application, you need to have Node.js installed on your machine. You also need to have a Firebase project set up, and you should have already created a Firestore database.


#### Clone this repository to your local machine:
`git clone https://github.com/nivesh852/PDF-to-HTML/`


#### Navigate to the project directory:
`cd pdf-to-static-html-firestore`


#### Install the required packages:
`npm install` or `yarn install`



Create a .env file at the root of the project directory, and add the following environment variables:
```
REACT_APP_FIREBASE_API_KEY=<your-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-app-id>
  ```
You can find these values in your Firebase project settings.

## Run the application:

npm start
#### The application should now be running on http://localhost:3000.



## Usage
1. Drag and drop a PDF file onto the drop zone or click on the drop zone to select a file.
2. Click the "Upload" button to convert and upload the file to Firestore.
3. Once the file is uploaded, you can see the static html page.


## Built With
- React - A JavaScript library for building user interfaces
- Firebase - A comprehensive app development platform
- React Dropzone - An easy and customizable file dropzone component for React

## Limitations
1. This application currently only supports PDF files up to 50 MB in size. Attempting to upload a larger file will result in an error.
2. Authentication is not supported in this version of the application. Anyone can upload files and view converted HTML files.

## Future Scope

- [ ] Add authentication support to prevent unauthorized access to uploaded files and converted HTML files.
- [ ] Allow users to customize the conversion process (e.g., choose which pages to convert, choose the output format).
- [ ] Support other file formats (e.g., Microsoft Word documents, images).
- [ ] Improve the user interface to make it more user-friendly and intuitive.
- [ ] Allow users to view and download uploaded PDF files.
- [ ] Add search functionality to search for uploaded files.
- [ ] Add support for multiple languages.
- [ ] Add the ability to delete uploaded files and converted HTML files.  
