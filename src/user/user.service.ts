import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schema/user.schema';
import { CreateUserDTO } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>){}


    // Adding a new user to the system 

    async addUser(createUserDTO: CreateUserDTO) : Promise <User> {
        const newUser = await this.userModel.create(createUserDTO);
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser.save();
    }

    // finding user 
    async findUser(username: string) : Promise <User> {
        const user = await this.userModel.findOne({username: username});
        return user;
    }

}
