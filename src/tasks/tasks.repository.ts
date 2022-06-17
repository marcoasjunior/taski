import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseRepository } from "src/shared/repository/Base.repository";
import { Task, TaskDocument } from "./entities/task.entity";

@Injectable()
export class TasksRepository extends BaseRepository<TaskDocument> {
    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>
    ) {
        super(taskModel);
    }

}