
import { db } from './db.js';

export const getIngredients = async (ingredient) => {
    const connection = db.getConnection();
    const ingredients = connection.collection('Ingredients').find({}).toArray();
    return ingredients;}