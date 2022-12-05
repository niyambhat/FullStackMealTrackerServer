import { db } from "./db.js";


export const searchRecipes=async(searchString)=>{
    const conn = db.getConnection();
    const recipes = conn.collection('recipies').find({ $text: { $search: searchString } }).toArray();
    return recipes;
}