import { Component, output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  template: `
    <form
      class="mb-6 flex gap-3"
      (submit)="addTask($event, title.value)"
    >
      <input
        #title
        type="text"
        placeholder="Digite uma nova tarefa"
        class="min-w-0 flex-1 rounded-lg border border-pink-200
               bg-white px-4 py-3 outline-none focus:border-pink-500"
        required
      />

      <button
        type="submit"
        class="rounded-lg bg-pink-500 px-5 py-3
               font-medium text-white hover:bg-pink-600"
      >
        Adicionar
      </button>
    </form>
  `
})
export class TaskForm {
  taskCreated = output<string>();

  addTask(event: Event, title: string) {
    event.preventDefault();

    const taskTitle = title.trim();

    if (!taskTitle) {
      return;
    }

    this.taskCreated.emit(taskTitle);
    (event.target as HTMLFormElement).reset();
  }
}