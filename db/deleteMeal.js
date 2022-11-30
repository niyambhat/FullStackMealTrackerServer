import { db } from "./db.js";

export const deleteMeal = async(mealName)=>{
    const conn= db.getConnection();
    await conn.collections('meals').delete({name:mealName});
}
