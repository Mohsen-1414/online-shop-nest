import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Date, Document} from 'mongoose';


export type ProductDocumnet = Product & Document ;

@Schema()
export class Product {


    @Prop({ required: true, type: String })
    title: string

    @Prop({type: String})
    description: string

    @Prop({ required: true })
    price: number


    @Prop({ required: true, type: String })
    category: [string]


    @Prop({ required: true, type: String })
    creationDate: string;

};

export const ProductSchema = SchemaFactory.createForClass(Product);
 