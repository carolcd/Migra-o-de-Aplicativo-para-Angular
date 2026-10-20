import { Component, input, output } from '@angular/core';
import { Task } from '../../task.model';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  template: `
    <section>
      <h2 class="mb-4 text-xl font-semibold text-pink-900">
        Minhas tarefas ({{ tasks().length }})
      </h2>

      @if (tasks().length === 0) {
        <p class="rounded-lg bg-pink-50 p-6 text-center text-pink-400">
          Nenhuma tarefa cadastrada.
        </p>
      }

      <div class="space-y-3">
        @for (task of tasks(); track task.id) {
          <app-task-card
            [task]="task"
            (remove)="taskRemoved.emit($event)"
          />
        }
      </div>
    </section>
  `
})
export class TaskList {
  tasks = input.required<Task[]>();
  taskRemoved = output<number>();
}
