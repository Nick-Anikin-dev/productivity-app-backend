import { Category } from "../category/entities/category.entity";

export interface ITask {
    id: number;
    title: string;
    description: string | null;
    category: Category | null;
    is_completed: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
