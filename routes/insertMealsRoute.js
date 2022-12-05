import { insertMeal } from "../db/insertMeal.js";
import { getPopulatedMeals } from "../db/getPopulatedMeals.js";

export const insertMealsRoute = {
    method:"post",
    path:"/meals",
    handler:async(req,res)=>{
        const {date, recipeId} = req.body;
        const newMeal = {
            recipieId:recipeId, plannedDate:date
        }
        await insertMeal(newMeal);
        const updatedMeals = await getPopulatedMeals();
        res.status(200).json(updatedMeals)     
    }   
}