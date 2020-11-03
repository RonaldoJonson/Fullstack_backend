import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net"
import signUp from "./endpoints/signUp";
import login from "./endpoints/login";
import getOwnProfile from "./endpoints/getOwnProfile";
import getUserById from "./endpoints/getUserById";
import { CreateVideo } from "./endpoints/createVideo";
import { GetVideos, GetVideoById } from './endpoints/GetVideo';
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('/signup', signUp)
app.post('/login', login)
app.get('/user/profile', getOwnProfile);
app.get('/user/:id', getUserById)

app.post('/video', CreateVideo);
app.get('/video', GetVideos);
app.get('/video/:id', GetVideoById);

//console.log('teste');

const server = app.listen(process.env.PORT || 3003, () => {
  if(server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server`);
  }
});