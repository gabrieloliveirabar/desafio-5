import { Request,Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

export const deleteUserController = async(req:Request, res:Response)=>{
    const  id = req.params.id
    const{ id:idToken } = req.user

    const userDelete = await deleteUserService(id, idToken)
    
    return res.status(204).json()
}