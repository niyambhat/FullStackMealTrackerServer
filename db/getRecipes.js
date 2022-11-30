import { db } from "./db.js";

export const getRecipes = async()=>{
const connection = db.getConnection();
const recipies = connection.collection('recipies').find({}).toArray();
return recipies;
}