import { Component, signal } from '@angular/core';
import { Task } from './task.model';
import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskForm, TaskList],
  template: `
    <main class="min-h-screen bg-pink-50 p-6">
      <div class="mx-auto max-w-3xl">
        <h1 class="mb-2 text-3xl font-bold text-pink-900">
          Gerenciador de Tarefas
        </h1>

        <p class="mb-6 text-pink-700">
          Organize suas tarefas de forma simples.
        </p>

        <app-task-form
          (taskCreated)="addTask($event)"
        />

        <app-task-list
          [tasks]="tasks()"
          (taskRemoved)="removeTask($event)"
        />
      </div>
    </main>
  `
})
export class App {
  tasks = signal<Task[]>([]);
  nextId = 1;

  addTask(title: string) {
    const newTask: Task = {
      id: this.nextId++,
      title: title
    };

    this.tasks.update(tasks => [...tasks, newTask]);
  }

  removeTask(id: number) {
    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
  }
}