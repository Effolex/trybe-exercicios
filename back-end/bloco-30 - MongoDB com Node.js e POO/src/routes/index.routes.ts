import { Router } from "express";
import TournamentController from "../controllers/TournamentController";

const tournamentController = new TournamentController();
const routes = Router();

routes.get('/tournaments', tournamentController.getTournaments);
routes.post('/tournaments', tournamentController.create);
routes.patch('/tournaments', tournamentController.update);

export default routes;