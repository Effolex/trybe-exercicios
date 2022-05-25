import { UpdateWriteOpResult } from 'mongoose';
import { DeleteResult } from 'mongodb';


interface Model<T> {
  read(): Promise<T[]>,
  create(obj: T): Promise<T>,
  update(obj: T, id_: string): Promise<UpdateWriteOpResult>,
  readOne(id_: string): Promise<T | null>,
  delete(id_: string): Promise<DeleteResult>,
}

export default Model;