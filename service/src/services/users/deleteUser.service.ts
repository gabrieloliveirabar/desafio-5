import { User } from "../../entities/user.entity";
import AppDataSource from "../../data-source";

import { AppError } from "../../errors/appError";

export const deleteUserService = async(idToken:string, id:string)=>{
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id})

    if(!id){
        throw new AppError("user not found",404)
    }
    if(!user){
        throw new AppError
        ("user not found",404)
    }
    if(id != idToken){
        throw new AppError("The user cannot update other users because he is not an administrator", 401)
    }
    if(!user.isActive){
        throw new AppError("user not found",400)
    }
    await userRepository.save({
        id: user.id,
        isActive: false
    })

}