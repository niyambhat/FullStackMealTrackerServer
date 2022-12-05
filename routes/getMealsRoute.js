import { getPopulatedMeals } from "../db/getPopulatedMeals.js";

export const getMealsRoute = {
    method:"get",
    path:"/meals",
    handler: async(req,res)=>{
        const meals = await getPopulatedMeals();
        res.status(200).json(meals);
    }
}

