import { ICategory } from "../../core/category.interface";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Task } from "../../task/entities/task.entity";
import { User } from "../../user/entities/user.entity";

@Entity('category')
export class Category implements ICategory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    title: string;

    @OneToMany(() => Task, (task) => task.category)
    tasks: Task[];

    @ManyToOne(() => User, (user) => user.categories)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
