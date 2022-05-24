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

  public update = async (dataToInsert: ITournaments, id: string): Promise<ITournaments> => {
    const createdTournament = this.model.updateOne({ _id: id }, { ...dataToInsert }, { new: true });
    return createdTournament as unknown as ITournaments;
  }

  public destroy = async (year: string): Promise<ITournaments> => {
    const createdTournament = this.model.deleteOne({ year });
    return createdTournament as unknown as ITournaments;
  }
}

export default TournamentModel;