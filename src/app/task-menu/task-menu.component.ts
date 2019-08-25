import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState, TaskItem } from '../store';
import { SELECT_TASK } from '../actions';

@Component({
  selector: 'app-task-menu',
  templateUrl: './task-menu.component.html',
  styleUrls: ['./task-menu.component.scss']
})
export class TaskMenuComponent implements OnInit {
  @select() searchedItems;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
  }

  selectTask = (id) => {
    this.ngRedux.dispatch({type: SELECT_TASK, payload: id})
  }

}
