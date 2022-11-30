import { db } from "./db.js";
export const getMeal = async()=>{
    const connection = db.getConnection();
    const meals =connection.collection('meals').find({}).toArray()
    return meals;
}