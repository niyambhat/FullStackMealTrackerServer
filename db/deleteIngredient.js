import { db } from './db.js';
import { ObjectId } from 'mongodb';


export const deleteIngredient = async (id) => {
    const connection = db.getConnection();
    await connection.collection('Ingredients').deleteOne({ _id: ObjectId(id) });
}