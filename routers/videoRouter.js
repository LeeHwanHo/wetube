import express from "express";
import app from "../app";
import { deleteVideo, editVideo, upload, videoDetail } from "../controllers/videoControllers";
import routes from "../routes";

const videoRouter = express.Router();

// videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.videoDetail,videoDetail);

export default videoRouter;

