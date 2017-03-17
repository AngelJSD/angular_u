import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'tasks',
    templateUrl: 'tasks.component.html',
})
export class TasksComponent  { 

  task: task;
  tasks: any;
  showTasks: boolean;

  constructor(public model: ModelService){

    this.model.get('/database').subscribe(data => {
      this.tasks = data;
    });
    this.showTasks = false;
  }

  toggleTasks(){
      if(this.showTasks){
          this.showTasks = false;
      } else {
        this.showTasks = true;
      }
  }

  addTask(name: string){

      console.log(name);
      this.task={
          name: name,
          edit: false,
          done: false
      }
      this.tasks.push(this.task);
      this.model.save('/database', this.tasks).subscribe(data => {
        this.tasks = data;
      });
  }

  deleteTask(i: number){
      this.tasks.splice(i, 1);
  }

  doneTask(i: number){
      if(this.tasks[i].done){
        this.tasks[i].done=false;
      } else {
        this.tasks[i].done=true;
      }
  }

  editTask(i: number){
      if(this.tasks[i].edit){
        this.tasks[i].edit=false;
      } else {
        this.tasks[i].edit=true;
      }
  }
}

interface task{
  name: string;
  edit: boolean;
  done: boolean;
}