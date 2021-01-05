import express from "express"; // Web Project Node JS framework
import morgan from "morgan"; // for log middleware
import helmet from "helmet"; // for security middleware
import cookieParser from "cookie-parser"; //for cookie parsing middleware
import bodyParser from "body-parser"; // for html body & json Object Parsing middleware
import { userRouter } from "./router";

const app = express()

const handleHome = (req, res) => res.send('Hello from home');

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/",handleHome);

app.get('/profile',handleProfile);

app.use("/user",userRouter); // use all route in "./router"

export default app;