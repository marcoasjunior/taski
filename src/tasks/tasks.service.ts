import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './entities/task.entity';

@Injectable()
export class TasksService {

    constructor(
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>
    ) { }

    create(createTaskDto: CreateTaskDto) {
        return this.taskModel.create(createTaskDto);
    }

    findAll() {
        return this.taskModel.find();
    }

    findOne(id: number) {
        return this.taskModel.findById(id);
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true });
    }

    remove(id: number) {
        return this.taskModel.findByIdAndRemove(id);
    }
}
