import {

    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,

} from "typeorm"
import { v4 as uuid } from "uuid"
import { Exclude } from "class-transformer"

@Entity("user")
export class User {
    @PrimaryColumn("uuid")
    readonly id: string;

    @Column({ length: 100})
    name: string;

    @Column({length:250})
    email:String

    @Column()
    telephone: number

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date

    @Column({ default: true })
    isActive: boolean;

    @Column("simple-array")
    contato:object[]

   



    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}