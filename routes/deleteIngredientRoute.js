import { deleteIngredient } from "../db/deleteIngredient.js";

export const deleteIngredientRoute = {
    method:"delete",
    path:"ingredients/:name",
    handler: async(req,res)=>{
        const {name} = req.params;
        await deleteIngredient(name); 
    } 
}