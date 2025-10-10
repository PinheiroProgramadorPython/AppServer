import express from "express";
import premioSchema from "../models/premio.js";
import cloudinary from "../config/cloudinary.js";
import multer from "multer";
import path from "path";


// const storage = multer.diskStorage({
//     destination: "public/uploads",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.get("/premios", async (req, resp) => {
    try {
        const premios = await premioSchema.find().select("-__v");
        resp.json(premios).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.post("/premios", upload.single("image"), async (req, resp) => {
    try {
        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "premios" }, // pasta no Cloudinary
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        });


        const imageUrl = uploadResult;
        const premio = await premioSchema.create({ ...req.body, image: imageUrl });
        resp.json(premio).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.put("/premios/:id", upload.single("image"), async (req, resp) => {
    let imageUrl;
    try {
        if (req.file) {
            imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        } else {
            imageUrl = req.body.image;
        }

        const premio = await premioSchema.findOneAndUpdate({ id: req.params.id }, { ...req.body, image: imageUrl }, { new: true });
        resp.json(premio).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

router.delete("/premios/:id", async (req, resp) => {
    try {
        const premio = await premioSchema.findOneAndDelete({ id: req.params.id });
        resp.json(premio).status(200);
    } catch (error) {
        resp.json({ error: error, message: "Request Failure" }).status(400);
    }
});

export default router;
