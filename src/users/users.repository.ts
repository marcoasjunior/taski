import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./entities/user.entity";

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async create(user: User): Promise<User> {
        return this.userModel.create(user);
    }

    async update(id: string, user: User): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async remove(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }

    async findOne(query: any): Promise<User> {
        return this.userModel.findOne(query);
    }
    

}