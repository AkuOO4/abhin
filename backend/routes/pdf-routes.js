import express from "express";

import {
    handlePDFUpload, upload
} from "../controllers/pdf-controller";

const pdf_Router = express.Router();

pdf_Router.post("/upload",upload.single('pdf'), handlePDFUpload);

export default pdf_Router;
