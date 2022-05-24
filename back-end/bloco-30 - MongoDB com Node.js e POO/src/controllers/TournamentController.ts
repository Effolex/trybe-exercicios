import { RequestHandler } from "express";
import { ITournaments } from "../schemas/TournamentSchema";
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

  public create:RequestHandler = async (req, res, _next) => {
    try {
      const mundial = req.body as ITournaments;
      const tournaments = await this.service.create(mundial);

      return res.status(201).json(tournaments);
    } catch (error) {
      return res.status(500).send({ message: this.internalError });
    }
  }

  public update:RequestHandler = async (req, res, _next) => {
    try {
      const mundial = req.body as ITournaments;
      const { _id } = req.body;
      const tournaments = await this.service.update(mundial, _id);

      return res.status(201).json(tournaments);
    } catch (error) {
      console.log('🚀error', error)
      return res.status(500).send({ message: this.internalError });
    }
  }
}

export default TournamentController;