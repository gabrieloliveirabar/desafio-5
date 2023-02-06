import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import { AppError } from "../../errors/appError";

export const updateUserService = async(userData: object, id: string, idToken: string )=>{
    const userRepository = AppDataSource.getRepository(User)
    const findUser = await userRepository.findOneBy({id})

    const key = Object.keys(userData)
    if(!id){
        throw new AppError("User not found",404)
    }

    
    if(findUser){
        throw new AppError("User not found")
    }
    if(key.includes("isActive") || key.includes("id")){
        throw new AppError("unauthorized", 401)

    }
    if(id !== idToken){
        throw new AppError(
            "The user cannot update other users because he is not an administrator",
      401
        )
    }

    await userRepository.update(id,{
        name: userData.name ? DataTransfer.name : findUser!.name
    })
}