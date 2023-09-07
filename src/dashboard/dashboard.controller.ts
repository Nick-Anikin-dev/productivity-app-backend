import { Controller, Get, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { AuthGuard } from "../../guards/auth.guard";

@UseGuards(AuthGuard)
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {
  }

  @Get('pie')
  async getFavoritesCategories() {
    return [
      {title: 'Category 1', tasks: 10},
      {title: 'Category 2', tasks: 4},
      {title: 'Category 3', tasks: 8}
    ]
  }

  @Get('tasks')
  async getTasksAnalytics() {
    return [
      {date: '2023-07-22', completed_tasks: 10},
      {date: '2023-07-23', completed_tasks: 8},
      {date: '2023-07-24', completed_tasks: 2},
      {date: '2023-07-25', completed_tasks: 5},
      {date: '2023-07-26', completed_tasks: 4},
      {date: '2023-07-27', completed_tasks: 111},
      {date: '2023-07-28', completed_tasks: 54},
    ]
  }
}
