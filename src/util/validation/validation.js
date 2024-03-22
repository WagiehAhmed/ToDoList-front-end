import joi from "joi";
// user validation schema
export const userSchema = joi.object({
    email:joi.string().email({tlds:{allow:false}}).required().min(5),
    password:joi.string().required().min(5),
}); 
// task validation schema
export const taskSchema = joi.object({
    title:joi.string().empty().required().min(5),
    content:joi.string().empty().required().min(10),
}); 
