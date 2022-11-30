import { db } from "./db.js"
export const insertIngredient = async(ingredient)=>{
    const connection = db.getConnection();
    await connection.collection('Ingredients').insert(ingredient);
}