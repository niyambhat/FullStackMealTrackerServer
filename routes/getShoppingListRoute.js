import { getIngredients } from "../db/getIngredients.js";
import { getPopulatedMeals } from "../db/getPopulatedMeals.js";

export const getShoppingListRoute={
    method:'get',
    path:'/shopping-list',
        handler: async(req,res)=>{   
        const ingredients = await getIngredients();
        const meals = await getPopulatedMeals();
        const futureMeals = meals.filter((meal)=>{
            const mealDate = new Date(meal.plannedDate);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() -1);
            return mealDate > yesterday;
        })
        const shoppingList = futureMeals.flatMap(item=>{
            return(item.recipie.ingredients)
        })
        
        //using set to remove duplicate array
        const requiredIngredientsNames = shoppingList.map((item)=>item.name)
        const missingIngredients = requiredIngredientsNames.filter((ingredientName)=>!ingredients.some(item=>item.name === ingredientName))
        res.status(200).json(missingIngredients )
    },
}

