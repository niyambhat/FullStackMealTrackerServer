import { deleteMeal } from "../db/deleteMeal.js";

export const deleteMealRoute = {
    method:"delete",
    path:"/meals/:name",
    handler:async(req,res)=>{
     const {name} = req.body;
     await deleteMeal(name);
    }
}