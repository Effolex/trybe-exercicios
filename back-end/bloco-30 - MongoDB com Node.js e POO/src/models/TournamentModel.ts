import { model as createModel } from "mongoose";
import { ITournaments, tournamentSchema } from "../schemas/TournamentSchema";

class TournamentModel {

  constructor(private model = createModel<ITournaments>('tournaments', tournamentSchema)){}

  public getTournaments = async (params: object[] | undefined): Promise<ITournaments[]> => {

    const tournaments = await (typeof params === 'undefined')
      ? this.model.find() : this.model.find({ ...params });
    return tournaments;
  }

  public create = async (dataToInsert: ITournaments): Promise<ITournaments> => {
    const createdTournament = this.model.create(dataToInsert);
    return createdTournament;
  }
}

export default TournamentModel;