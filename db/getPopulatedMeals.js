import { getMeal } from "./getMeal.js";
import { getRecipes } from "./getRecipes.js";


export const getPopulatedMeals = async () => {
    const meals = await getMeal();
    const recipes = await getRecipes();
    const populatedMeals = meals.map(meal=>({
        ...meal,
        recipie:recipes.find(recipe=> recipe.id === meal.recipieId)    
            }
        ))
    return populatedMeals;
}