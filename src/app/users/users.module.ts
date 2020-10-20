import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users/store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/store/users.effects';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
