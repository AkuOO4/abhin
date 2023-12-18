// pdfUpload.js
import multer from 'multer';
import fs from 'fs';
//const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

 const handlePDFUpload = (req, res,next) => {
  
    try {
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ error: 'No PDF file uploaded' });
    }

    const pdfBuffer = req.file.buffer;

    // Extract the original filename from the request file object
    const originalFileName = req.file.originalname;

    // Specify the path where you want to save the PDF file
    const filePath = '../recieved_files/'+originalFileName+'.pdf';

    // Write the PDF buffer to the file
    fs.writeFileSync(filePath, pdfBuffer);

    // Do something with the PDF buffer (e.g., save to disk, process, etc.)
    // For simplicity, let's just send a response confirming the upload
    res.json({ message: 'PDF received successfully!' });
  } catch (error) {
    console.error('Error handling PDF upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { upload, handlePDFUpload };