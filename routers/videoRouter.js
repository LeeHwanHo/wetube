import express from "express";
import routes from "../routes";
import { deleteVideo, editVideo, getUpload, videoDetail,postUpload } from "../controllers/videoControllers";

const videoRouter = express.Router();

// videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,postUpload);

videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;

