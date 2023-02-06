import { Request, Response } from "express";

export const listUserId = async(req:Request, res:Response) =>{
    const id  = req.params.id

    return res.status(200).json()
}