import { IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

    constructor(data?: Partial<CreateUserDto>) {
        Object.assign(this, data);
    }
  
}
