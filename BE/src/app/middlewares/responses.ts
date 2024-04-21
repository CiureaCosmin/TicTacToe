import { Response, Request } from "express";

class Responses {
  /**
   * ok
   * @author Ntavigwa Bashombe
   * @since 0.001
   *
   * @param {number} status - response status
   * @param {string} message - response message
   * @param {Response} res - Response
   * @return {Response} returns response
   * @memberof Responses
   */
  public ok = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };
  gameArray: string[] = [];
  public game = async (request: Request, res: Response) => {
    const gameId = request.body.data;
    const symbol = this.gameArray.includes(gameId) ? "DEFAULT_X" : "DEFAULT_0";
    this.gameArray.push(gameId);

    return res.status(200).json({
      status: 200,
      gameId: request.body.data,
      symbol: symbol,
    });
  };

  /**
   * error
   * @author Ntavigwa Bashombe
   * @since 0.001
   *
   * @param {number} status - response status
   * @param {string} message - response message
   * @param {Response} res - Response
   * @return {Response} returns response
   * @memberof Responses
   */
  public error = (status: number, message: string, res: Response) => {
    return res.status(status).json({
      status,
      message,
    });
  };
}

export default Responses;
