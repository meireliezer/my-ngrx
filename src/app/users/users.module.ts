import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from './users/store/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users/store/users.effects';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
