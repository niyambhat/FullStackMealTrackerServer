import { searchRecipes } from "../db/searchRecipes.js";

export const searchRecipesRoute ={
    method:"get",
    path:'/recipies',
    handler: async(req,res)=>{
        const searchString = req.query.search;
        const results = await searchRecipes(searchString);
        res.status(200).json(results)
        
    }
}