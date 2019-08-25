import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO, UPDATE_TODO } from '../actions';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  title = "";
  content= "";
  @select() taskItems;
  @select() selectedTask;
  constructor(private ngRedux: NgRedux<IAppState>) { 
  }

  ngOnInit() {
  }

  createTask(){
    this.ngRedux.dispatch({type: ADD_TODO, todo:{
      title: this.title,
      content: this.content,
    }});
    this.title ='';
    this.content = '';
  }
  updateTask(){
    const id = this.ngRedux.getState().selectedTask.id;
    this.ngRedux.dispatch({type: UPDATE_TODO, payload:{
      id: id,
      title: this.title,
      content: this.content,
    }});
  }

}
