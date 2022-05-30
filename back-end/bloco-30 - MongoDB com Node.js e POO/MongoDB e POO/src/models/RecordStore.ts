import { Schema, model as createModel, Document } from 'mongoose';
import { string } from 'zod';
import RecordStore from '../interfaces/RecordStore';
import MongoModel from './MongoModel';

interface RecordStoreDocument extends RecordStore, Document { }

const RecordStoreSchema = new Schema<RecordStoreDocument>({
  artist: String,
  title: String,
  format: String,
  yearPublished: Number,
  new: Boolean,
});

class RecordStoreModel extends MongoModel<RecordStore> {
  constructor(model = createModel('RecordStore', RecordStoreSchema)) {
    super(model);
  }
}

export default RecordStoreModel;