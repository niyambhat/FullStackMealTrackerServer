import { insertIngredient } from "../db/insertIngredient.js"
import { getIngredients } from "../db/getIngredients.js";

export const insertIngredientRoute = {
    method:"post",
    path:"/ingredients",
    handler: async(req, res)=>{
        const ingredient = req.body;
        await insertIngredient(ingredient);
        const updatedIngredients = await getIngredients();
        res.status(200).json(updatedIngredients)
    }   
}