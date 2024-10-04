import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// MIDDLE WARES
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());

app.use("/server/auth/", authRoutes);
app.use("/server/users/", userRoutes);
app.use("/server/posts/", postRoutes);
app.use("/server/comments/", commentRoutes);
app.use("/server/likes/", likesRoutes);

app.listen(8800, () => {
  console.log("Server Working !");
});
