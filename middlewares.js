import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "uploads/videos"}) // /uploads/videos computer root upload

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes; //템플릿에서 전역적으로 사용 가능
    res.locals.user = { // Fakse User Data
        isAuthenticated: true,
        id: 1
    }
    next(); //미들웨어이므로 다음함수로 넘어가야함을 정의
};

export const uploadVideo = multerVideo.single('videoFile');