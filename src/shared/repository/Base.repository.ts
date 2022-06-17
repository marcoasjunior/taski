import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";

@Injectable()
export class BaseRepository<T> {

    entity: Model<T>;

    constructor(entity: Model<T>) {
        this.entity = entity;
    }

    async findAll() {
        return this.entity.find();
    }

    async findById(id: string) {
        return this.entity.findById(id);
    }

    async create(entity: T) {
        return this.entity.create(entity);
    }

    async update(id: string, entity: T) {
        return this.entity.findByIdAndUpdate(id, entity, { new: true });
    }

    async remove(id: string) {
        return this.entity.findByIdAndRemove(id);
    }

    async findOne(query: any) {
        return this.entity.findOne(query);
    }

    async find(query: any) {
        return this.entity.find(query);
    }

    async count(query: any) {
        return this.entity.count(query);
    }

    async aggregate(query: any) {
        return this.entity.aggregate(query);
    }

}