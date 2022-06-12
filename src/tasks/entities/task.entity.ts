import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop()
    name: string;

    @Prop({ ref: 'User', type: ObjectId })
    creator: ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);