import { Model } from "mongoose";


export abstract class BaseService<T> {
  private _repository: Model<T>;
  private _populateOnFind: { path: string, model: Model<any> }[];

  constructor(repository: Model<T>, populateOnFind: { path: string, model: Model<any> }[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  async findAll(): Promise<T[]> {

    return this._repository.find().populate(this._populateOnFind).exec();
  }

  async findOne(id: any): Promise<T> {

    const leanDoc = await this._repository.findById(id).populate(this._populateOnFind).exec();
    return leanDoc as T;
  }

  async create(item: T): Promise<T> {

    return this._repository.create(item);
  }

  async update(id: string, item: T) {

    return this._repository.findByIdAndUpdate(id, item);
  }

  async remove(id: string) {
    return this._repository.findByIdAndRemove(id);
  }
}
