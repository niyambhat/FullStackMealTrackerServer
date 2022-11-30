import { insertIngredient } from "../db/insertIngredient.js"

export const insertIngredientRoute = {
    method:"post",
    path:"/ingredients",
    handler: async(req, res)=>{
        const ingredient = req.body;
        await insertIngredient(ingredient);
    }   
}