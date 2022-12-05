import { db } from "./db.js";
export const insertMeal = async(meal)=>{
    const conn = db.getConnection();
    await conn.collection('meals').insertOne(meal);
}