import express from "express";
import cors from "cors";
import "./config/dotenv.js";
import creatorsRouter from "./routes/creators.js";
import addUser from "./controllers/addUser.js";
import addCreators from "./controllers/addCreators.js";
import deleteCreator from "./controllers/deleteCreator.js";
import editCreator from "./controllers/editCreator.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/creators", creatorsRouter);

app.post("/createUser", addUser);

app.post("/addCreator", addCreators);

app.post("/deleteCreator", deleteCreator);

app.post("/editCreator", editCreator);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">CreatorVerse API</h1>'
    );
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
