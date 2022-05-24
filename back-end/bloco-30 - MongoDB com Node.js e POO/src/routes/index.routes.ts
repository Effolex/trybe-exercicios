import { Router } from "express";
import TournamentController from "../controllers/TournamentController";

const tournamentController = new TournamentController();
const routes = Router();

routes.get('/tournaments', tournamentController.getTournaments);

export default routes;