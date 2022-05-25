import TournamentModel from '../src/models/TournamentModel'
import Sinon from 'sinon';
import { Model } from 'mongoose';
import { ITournaments } from '../src/schemas/TournamentSchema';

describe('TournamentModel', () => {
  const mockModel = {
    find: Sinon.spy(),
  } as unknown as Model<ITournaments>;
  describe('get', () => {
    it('chama a funcao get do model', async () => {
      const tournamentModel = new TournamentModel(mockModel);
      await tournamentModel.getTournaments(undefined);

      Sinon.assert.called(mockModel.find as Sinon.SinonSpy)
    })
  })
})