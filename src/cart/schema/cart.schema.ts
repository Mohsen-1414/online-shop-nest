import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CartItem, CartItemSchema } from './cart-item.schema';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
    @Prop({ required: true })
    userId: string;
  
    @Prop({ type: [CartItemSchema], default: [] })
    items: CartItem[];
  }

export const CartSchema = SchemaFactory.createForClass(Cart);
