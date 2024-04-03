import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Role } from 'src/auth/enum/role.enum';


export type UserDocument = User & Document;

@Schema()

export class User {

    @Prop({ type: String, unique: true })
    @IsNotEmpty()
    username: string 

    @Prop({ type: String })
    @IsNotEmpty()
    password: string

    @Prop({ type: String, unique: true })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Prop()
    roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);

