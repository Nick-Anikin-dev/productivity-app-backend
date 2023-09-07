import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";
import { Category } from "../category/entities/category.entity";

@Injectable()
export class TaskService {
  constructor(
      @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
      @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
  ) {
  }

  async create(createTaskDto: CreateTaskDto) {
    const {category_id, ...partial} = createTaskDto;
    const new_task = this.taskRepository.create({...createTaskDto, is_completed: false});
    if (category_id) {
      const category = await this.categoryRepository.findOneOrFail({where: {id: category_id}})
      return await this.taskRepository.save({...partial, category_id: category.id, category, is_completed: false});
    }
    return await this.taskRepository.save(new_task);
  }

  async findAll() {
    return await this.taskRepository.find({relations: [ 'category' ]});
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({where: {id}, relations: [ 'category' ]})
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.save({id, ...updateTaskDto})
  }

  async remove(id: number) {
    return await this.taskRepository.softDelete({id})
  }
}
