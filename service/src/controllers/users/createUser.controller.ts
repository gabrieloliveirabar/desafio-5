import { Request, Response } from "express";
import { userCreateService } from "../../services/users/createUser.service";

export const createUserController = async (req:Request, res:Response)=>{
    const {name, email, telephone} =  req.body

    const newUser = await userCreateService({name, email, telephone})

    return res.status(201).json(newUser)
}