import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { routes } from "./shared/routes/routes";
import { errorMiddleware } from "./shared/errors/errorMiddleware";

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

export { app };
