import { deleteIngredient } from "../db/deleteIngredient.js";
import { getIngredients } from "../db/getIngredients.js";

export const deleteIngredientRoute = {
    method:"delete",
    path:"/ingredients/:id",
    handler: async(req,res)=>{
        const {id} = req.params;
        await deleteIngredient(id); 
        const ingredients = await getIngredients();
        res.status(200).json(ingredients) 
    } 
}