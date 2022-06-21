import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    password: string;

    constructor(data?: Partial<CreateUserDto>) {
        Object.assign(this, data);
    }
}
