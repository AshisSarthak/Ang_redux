import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskFormComponent,
    TaskMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
