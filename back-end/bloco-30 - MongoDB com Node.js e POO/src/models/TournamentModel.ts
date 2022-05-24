import { model as createModel } from "mongoose";
import { ITournaments, tournamentSchema } from "../schemas/TournamentSchema";

class TournamentModel {

  constructor(private model = createModel<ITournaments>('tournaments', tournamentSchema)){}

  public getTournaments = async (params: object[] | undefined): Promise<ITournaments[]> => {

    const tournaments = await (typeof params === 'undefined')
      ? this.model.find() : this.model.find({ ...params });
    return tournaments;
  }
}

export default TournamentModel;