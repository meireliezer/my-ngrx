import { createEntityAdapter } from '@ngrx/entity';
import { User } from '../model/user.model';

export const adapter = createEntityAdapter<User>();