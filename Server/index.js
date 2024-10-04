import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likesRoutes from "./routes/likes.js";

// MIDDLE WARES
app.use(express.json());

app.use("/server/auth/", authRoutes);
app.use("/server/users/", userRoutes);
app.use("/server/posts/", postRoutes);
app.use("/server/comments/", commentRoutes);
app.use("/server/likes/", likesRoutes);

app.listen(8800, () => {
  console.log("Server Working !");
});
