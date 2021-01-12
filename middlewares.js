import routes from "./routes";

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes; //템플릿에서 전역적으로 사용 가능
    next(); //미들웨어이므로 다음함수로 넘어가야함을 정의
};