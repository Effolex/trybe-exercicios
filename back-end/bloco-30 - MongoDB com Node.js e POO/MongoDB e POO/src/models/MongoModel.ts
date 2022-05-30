import { Model as M, Document, UpdateWriteOpResult } from 'mongoose';
import Model from '.';
import { DeleteResult } from 'mongodb';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T & Document>) {}

  create = async (obj: T):Promise<T> => this.model.create({ ...obj });

  read = async (): Promise<T[]> => this.model.find();

  readOne = async (id: string):Promise<T | null> =>
    this.model.findOne({ id });
  
  update = async (dataToInsert: T, id: string):Promise<UpdateWriteOpResult> =>
    this.model.updateOne({ _id: id }, { $set: dataToInsert });

  delete = async (id: string):Promise<DeleteResult> =>
    await this.model.deleteOne({ id });
  
}

export default MongoModel;