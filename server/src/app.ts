import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/v1", routes);

export default app;
