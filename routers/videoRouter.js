import express from "express";
import routes from "../routes";
import { deleteVideo, getUpload, videoDetail,postUpload, postEditVideo ,getEditVideo} from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// videoRouter.get(routes.videos,videos);
//Upload
videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,uploadVideo,postUpload);
//Edit Video
videoRouter.get(routes.editVideo() ,getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);
//Delete Video
videoRouter.get(routes.deleteVideo(),deleteVideo);
//Video Detail
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;

