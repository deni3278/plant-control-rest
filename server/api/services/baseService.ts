import mongoose, {Model} from "mongoose";
import l from "../../common/logger";


export abstract class BaseService<T> {
    private _repository: Model<T>;
    private _populateOnFind: { path: string, model: Model<any> }[];

    constructor(repository: Model<T>, populateOnFind: { path: string, model: Model<any> }[] = []) {
        this._repository = repository;
        this._populateOnFind = populateOnFind;
    }

    getAll(): Promise<T[]> {
        l.info(`Getting all ${this._repository.modelName}`);
        return this._repository.find().populate(this._populateOnFind).exec();
    }

    get(id: any): Promise<T> {
        l.info(`Getting ${this._repository.modelName} with id ${id}`);
        return this._repository.findById(id).populate(this._populateOnFind).exec();
    }

    create(item: T): Promise<T> {
        l.info(`Creating ${this._repository.modelName}`);
        return this._repository.create(item);
    }

    update(id: string, item: T) {
        l.info(`Updating ${this._repository.modelName} with id ${id}`);
        return this._repository.findByIdAndUpdate(id, item);
    }
}