console.log("JAI SHREE RAM JI / JAI BAJARANGBALI JI💖");

import "dotenv/config";
import cors from "cors";
import express from "express";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = 9080;

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000", // Specify your allowed origin
};
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoutes);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, async () => {
  await import("./Database/Config.js");
  console.log(`Example app listening on port ${port}!`);
});
