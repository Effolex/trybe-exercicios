interface Model<T> {
  read(): Promise<T>,
  create(obj: T): Promise<T>,
  update(obj: T): Promise<T>,
  readOne(id_: string): Promise<T | null>,
  delete(id_: string): Promise<T>,
}

export default Model;