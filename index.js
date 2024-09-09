import express from "express";
import cors from "cors";
const app = express();
import todoRouter from "./routes/todo.route.js";
import completedRouter from "./routes/completedTask.route.js";
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
app.use("/Todo", todoRouter);
app.use("/CompletedTask", completedRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
