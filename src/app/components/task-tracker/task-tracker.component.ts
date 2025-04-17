import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-tracker',
  standalone: false,
  templateUrl: './task-tracker.component.html',
  styleUrl: './task-tracker.component.css'
})
export class TaskTrackerComponent {
  taskForm: FormGroup;
  tasks: Task[] = [];
  filter: string = 'All';

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: [''],
      completed: [false],
    });
  }

  addTask() {
    if (this.taskForm.value.title.trim()) {
      this.tasks.push({ ...this.taskForm.value });
      this.taskForm.reset({ completed: false });
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  get filteredTasks() {
    switch (this.filter) {
      case 'Completed':
        return this.tasks.filter(task => task.completed);
      case 'Incomplete':
        return this.tasks.filter(task => !task.completed);
      default:
        return this.tasks;
    }
  }
}
