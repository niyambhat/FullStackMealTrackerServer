import { getIngredientsRoute } from "./getIngredientsRoute.js"
import {deleteIngredientRoute} from "./deleteIngredientRoute.js"
import { insertIngredientRoute } from "./insertIngredientRoute.js";
import { getMealsRoute } from "./getMealsRoute.js";
import { insertMealsRoute } from "./insertMealsRoute.js";
import { deleteMealRoute } from "./deleteMealRoute.js";
import { getRecipesRoute } from "./getRecipesRoute.js";
import { searchRecipesRoute } from "./searchRecipesroute.js";
import { getShoppingListRoute } from "./getShoppingListRoute.js";
// export const routes = [getIngredientsRoute,insertIngredientRoute,deleteIngredientRoute, getMealsRoute, insertMealsRoute, deleteMealRoute];
export const routes = [getIngredientsRoute, insertIngredientRoute, getMealsRoute, getRecipesRoute, deleteMealRoute, deleteIngredientRoute, searchRecipesRoute, insertMealsRoute, getShoppingListRoute ];
