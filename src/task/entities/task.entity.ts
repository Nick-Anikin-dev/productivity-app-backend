import { ITask } from "../../core/task.interface";
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Category } from "../../category/entities/category.entity";
import { User } from "../../user/entities/user.entity";

@Entity('task')
export class Task implements ITask {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    title: string;

    @Column({
        type: 'varchar',
        nullable: true,
    })
    description: string | null;

    @Column({
        type: 'boolean',
        nullable: false,
        default: null,
    })
    is_completed: boolean;

    @Column({
        type: 'integer',
        nullable: true
    })
    category_id: number;

    @ManyToOne(() => Category, (category) => category.tasks, {nullable: true})
    category: Category;

    @ManyToOne(() => User, (user) => user.tasks)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
