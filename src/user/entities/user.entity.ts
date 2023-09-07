import { IUser } from "../../core/user.interface";
import { Task } from "../../task/entities/task.entity";
import { Category } from "../../category/entities/category.entity";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn, Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('user')
export class User implements IUser {
    @ApiProperty({ example: 1, description: "Primary identifier" })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: "John", description: "User first name" })
    @Column({
        type: "varchar",
        nullable: false
    })
    first_name: string;

    @ApiProperty({ example: "Washington", description: "User last name" })
    @Column({
        type: "varchar",
        nullable: false,
    })
    last_name: string;

    @ApiProperty({ example: "user@mail.ru", description: "Email address" })
    @Column({
        type: "varchar",
        nullable: false,
        unique: true,
    })
    email: string;

    @ApiProperty({ example: "super-secured-password", description: "Password" })
    @Column({
        type: "varchar",
        nullable: false
    })
    password: string;

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[];

    @OneToMany(() => Category, (category) => category.user)
    categories: Category[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date | null;
}

