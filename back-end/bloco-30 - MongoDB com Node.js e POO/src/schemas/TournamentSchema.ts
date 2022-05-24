import { Schema } from 'mongoose';

export interface ITournaments {
  year: number,
  hostContry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalkepper: string,
  bestYoungPlayer: string,
}

export const tournamentSchema = new Schema<ITournaments>({
  year: { type: Number },
  hostContry: { type: String },
  champions: { type: String },
  runnerUp: { type: String },
  editionGoals: { type: Number },
  editionStrikers: [{ type: String }],
  bestPlayer: { type: String },
  bestGoalkepper: { type: String },
  bestYoungPlayer: { type: String }
});