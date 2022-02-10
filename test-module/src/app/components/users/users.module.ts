import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes =[
  {
    path: '',
    component: UserListComponent
  },
  {
    path: ':id/detail',
    component: UserDetailComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  },
  {
    path: ':id/update',
    component: UserUpdateComponent
  }
]

@NgModule({
    declarations: [
        UserListComponent,
        UserAddComponent,
        UserDetailComponent,
        UserUpdateComponent
    ],
    exports: [
        UserDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ]
})
export class UsersModule { }
