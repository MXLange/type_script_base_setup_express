import { Request, Response, Router } from "express";

const routes = Router();

routes.use("/", (req: Request, res: Response) => {
    return res.status(200).json({ teste: "ok" });
});

export { routes };
