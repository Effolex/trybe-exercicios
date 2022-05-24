import { RequestHandler } from "express";
import TournamentService from "../services/TournamentService";

class TournamentController {
  private internalError = 'Internal server error';

  constructor(private service = new TournamentService()){}

  public getTournaments:RequestHandler = async (req, res, _next) => {
    try {
      const possibleParams = (req.query) ? req.query as unknown as object[] : undefined;
      const tournaments = await this.service.getTournaments(possibleParams);
      if (!tournaments.length) {
        return res.status(404).json({ message: 'No data found!'})
      }
      return res.status(200).json(tournaments);
    } catch (error) {
      return res.status(500).send({ message: this.internalError });
    }
  }
}

export default TournamentController;