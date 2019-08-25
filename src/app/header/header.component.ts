import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { DELETE_TASK, CREATE_MODE, SEARCH_TASK } from '../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @select() taskItems;
  @select() originalItems;
  @select() selectedTask;
  searchText = ''
  constructor(private ngRedux: NgRedux<IAppState>) { 
  }

  ngOnInit() {
  }
  deleteTask(){
    this.ngRedux.dispatch({type: DELETE_TASK});
    this.createMode();
  }
  createMode(){
    this.ngRedux.dispatch({type: CREATE_MODE});
  }
  onKey(event){
    this.ngRedux.dispatch({type: SEARCH_TASK, payload: this.searchText});
  }

}
