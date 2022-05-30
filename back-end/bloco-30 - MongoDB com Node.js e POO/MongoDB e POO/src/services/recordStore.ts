import RecordStore, { RecordStoreSchema } from '../interfaces/RecordStore';
import Service, { ServiceError } from '.';
import RecordStoreModel from '../models/RecordStore';
import { UpdateWriteOpResult } from 'mongoose';
import { DeleteResult } from 'mongodb';

class RecordStoreService extends Service<RecordStore> {
  constructor(model = new RecordStoreModel()) {
    super(model);
  }

  public create = async (obj: RecordStore)
    :Promise<RecordStore | ServiceError | null> => {
    const parsed = RecordStoreSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  }

  public read = async (): Promise<RecordStore[]> => {
    return this.model.read();
  }

  public readOne = async (id: string): Promise<RecordStore | null> => {
    return this.model.readOne(id);
  }

  public update = async (obj: RecordStore, id: string)
    :Promise<UpdateWriteOpResult | null | ServiceError> => {
    const parsed = RecordStoreSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.model.update(obj, id);
  }

  public delete = async (id: string)
    :Promise<DeleteResult> => {
    return this.model.delete(id);
  }
}

export default RecordStoreService;