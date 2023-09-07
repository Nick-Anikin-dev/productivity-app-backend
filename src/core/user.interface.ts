import { Task } from "../task/entities/task.entity";
import { Category } from "../category/entities/category.entity";

export interface IUser {
    id: number;
    email: string;
    password: string;
    first_name: string;
    tasks: Task[];
    categories: Category[];
    last_name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
