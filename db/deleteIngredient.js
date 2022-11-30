import { db } from './db.js';

export const deleteIngredient = async (ingredientName) => {
    const connection = db.getConnection();
    await connection.collection('Ingredients').deleteOne({ name: ingredientName });
}