import { deleteMeal } from "../db/deleteMeal.js";
import { getPopulatedMeals } from "../db/getPopulatedMeals.js";

export const deleteMealRoute = {
    method:"delete",
    path:"/meals/:id",
    handler:async(req,res)=>{
     const {id} = req.params;
     await deleteMeal(id);
     const updatedMeals = await getPopulatedMeals();
     if(updatedMeals)res.status(200).json(updatedMeals)
    }
}