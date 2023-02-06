import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

import { IUserRequest } from "../../interfaces";

import AppDataSource from "../../data-source";

export const userCreateService = async({name, email,telephone}:IUserRequest)=>{

const userRepository = AppDataSource.getRepository(User)
const users = await userRepository.find()

const emailAlreadyExists = users.find((user)=>user.email === email)
if(emailAlreadyExists){
    throw new AppError("Email Aready exists");
}
const user = new User()
user.name = name
user.email = email
user.telephone = telephone
user.contato = []

userRepository.create(user)
await userRepository.save(user)

return user 

}
