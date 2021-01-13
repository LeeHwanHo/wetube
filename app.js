import express from "express"; // Web Project Node JS framework
import morgan from "morgan"; // for log middleware
import helmet from "helmet"; // for security middleware
import cookieParser from "cookie-parser"; //for cookie parsing middleware
import bodyParser from "body-parser"; // for html body & json Object Parsing middleware
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()

app.set("view engine", "pug");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(function(req,res,next) {
    res.setHeader("Content-Security-Policy","script-src 'self' https://archive.org");
    return next();
 });
app.use('/scripts', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/'));

app.use (localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users,userRouter); 
app.use(routes.videos, videoRouter);

export default app;