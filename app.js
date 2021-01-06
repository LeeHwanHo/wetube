import express from "express"; // Web Project Node JS framework
import morgan from "morgan"; // for log middleware
import helmet from "helmet"; // for security middleware
import cookieParser from "cookie-parser"; //for cookie parsing middleware
import bodyParser from "body-parser"; // for html body & json Object Parsing middleware
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users,userRouter); 
app.use(routes.videos, videoRouter);

export default app;