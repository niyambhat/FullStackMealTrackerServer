import { insertMeal } from "../db/insertMeal.js";

export const insertMealsRoute = {
    method:"post",
    path:"/meal",
    handler:async(req,res)=>{
        const meal = req.body;
        await insertMeal(meal);
    }   
}