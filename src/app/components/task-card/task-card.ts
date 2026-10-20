import { Component, input, output } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-card',
  template: `
    <article
      class="flex items-center justify-between gap-4
             rounded-lg border border-pink-200 bg-white p-4 shadow-sm"
    >
      <span class="break-words text-pink-900">
        {{ task().title }}
      </span>

      <button
        type="button"
        class="shrink-0 rounded-md bg-pink-100 px-3 py-2
               text-sm font-medium text-pink-700 hover:bg-pink-200"
        (click)="remove.emit(task().id)"
      >
        Remover
      </button>
    </article>
  `
})
export class TaskCard {
  task = input.required<Task>();
  remove = output<number>();
}