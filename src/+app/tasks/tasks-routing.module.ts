import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'todo', component: TasksComponent }
    ])
  ]
})
export class TasksRoutingModule { }
