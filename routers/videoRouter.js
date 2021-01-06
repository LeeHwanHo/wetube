import express from "express";
import app from "../app";
import { deleteVideo, editVideo, upload, videoDetail, videos } from "../controllers/videoControllers";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.videoDetail,videoDetail);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;

