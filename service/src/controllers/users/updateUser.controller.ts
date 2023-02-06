import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req:Request, res:Response)=>{
    const userData:IUserRequest = req.body
    const id = req.params.id
    const {id:idToken} = req.user

    const userUpdate = await updateUserService(userData, id, idToken)

    return res.status(200).json()
}