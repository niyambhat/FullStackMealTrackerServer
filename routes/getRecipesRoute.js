import { getRecipes } from "../db/getRecipes.js";

export const getRecipesRoute = {
    method:"get",
    path:"/allrecipies",
    handler:async(req, res)=>{
        const recipies = await getRecipes();
        res.status(200).json(recipies);
    }
}