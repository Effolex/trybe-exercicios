import TournamentModel from "../models/TournamentModel";
import { ITournaments } from "../schemas/TournamentSchema";

class TournamentService {
  constructor(private model = new TournamentModel()){}

  public getTournaments = async (params: object[] | undefined): Promise<ITournaments[]> => {
    const tournaments = this.model.getTournaments(params);
    return tournaments;
  }

  public create = async (dataToInsert: ITournaments): Promise<ITournaments> => {
    const createdTournament = this.model.create(dataToInsert);
    return createdTournament;
  }
  
}

export default TournamentService;