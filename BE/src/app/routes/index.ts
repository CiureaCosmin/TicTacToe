import { Application, Request, Response, json } from "express";
import cors from "cors";

import Responses from "../middlewares/responses";

const response = new Responses();

/**
 * class
 */
class Routes {
  /**
   * Router
   * @author Ntavigwa Bashombe
   * @since 0.001
   *
   * @param {Application} app - express application
   * @return {void} returns nothing
   * @memberof Routes
   */
  public router = (app: Application): any => {
    // Middleware to set CORS headers
    app.use(cors(), json());

    app.get("/x", (req: Request, res: Response) => {
      response.ok(200, "DEFAULT_0", res);
    });
    app.post("/api", (req: Request, res: Response) => {
      response.game(req, res);
    });

    app.all("*", (req: Request, res: Response) => {
      response.error(404, "Page Not Found", res);
    });
  };
}

export const route = new Routes().router;
