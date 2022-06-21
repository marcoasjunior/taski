import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(private readonly userRepository: UserRepository) { }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.create(createUserDto)
    }

    findAll() {
        return this.userRepository.findAll()
    }

    findById(id: string) {
        return this.userRepository.findById(id)
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(id, updateUserDto)
    }

    remove(id: string) {
        return this.userRepository.remove(id)
    }

    findOne(query: any) {
        return this.userRepository.findOne(query)
    }
}
