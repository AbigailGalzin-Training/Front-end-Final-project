import { createAction, props } from '@ngrx/store';
import { Album } from 'src/app/model/album';

export const add = createAction('[Albums] Add', props<{ albums: Album }>());
